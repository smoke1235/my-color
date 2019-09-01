
var sass = require('node-sass'),
    util = require('util'),
    fs = require('fs'),
    url = require('url'),
    dirname = require('path').dirname,
    mkdirp = require('mkdirp'),
    join = require('path').join;

var imports = {};

module.exports = function(options) {
  options = options || {};

  // Accept single src/dest dir
  if (typeof options === 'string') {
    options = { src: options };
  }

  // Source directory (required)
  var src = options.src || (function() {
    throw new Error('sass.middleware() requires "src" directory.');
  }());
  // Destination directory (source by default)
  var dest = options.dest || src;
  // Optional base path for src and dest
  var root = options.root || null;

  // Force compilation everytime
  var force = options.force || options.response;
  // Enable debug output
  var debug = true;
  // Enable beep on error
  var beep = options.beepOnError || false;

  var sassExtension = (options.indentedSyntax === true) ? '.sass' : '.scss';

  var sourceMap = options.sourceMap || null;

  var maxAge = options.maxAge || 0;

  //Allow custom log function or default one
  var log = options.log || function(severity, key, val, text) {
    if (!debug && severity === 'debug') { // skip debug when debug is off
      return;
    }

    text = text || '';

    if (severity === 'error') {
      console.error('[sass]  \x1B[90m%s:\x1B[0m \x1B[36m%s %s\x1B[0m', key, val, text);
    } else {
      console.log('[sass]  \x1B[90m%s:\x1B[0m \x1B[36m%s %s\x1B[0m', key, val, text);
    }
  };

  // Default compile callback
  options.compile = options.compile || function() {
    return sass;
  };

  // Middleware
  return function sass(req, res, next) {
    var sassMiddlewareError = null;

    // This function will be called if something goes wrong
    var error = function(err, errorMessage) {
      log('error', 'error', errorMessage || err);

      if (options.error) {
        options.error(err);
      }

      sassMiddlewareError = err;
    };



    var path = "index.css";

    if (!/\.css$/.test(path)) {
      log('debug', 'skip', path, 'nothing to do');
      return next();
    }

    if (options.prefix) {
      if (path.indexOf(options.prefix) === 0) {
        path = path.substring(options.prefix.length);
      } else {
        log('debug', 'skip', path, 'prefix mismatch');
        return next();
      }
    }

    var cssPath = join(dest, path),
        sassPath = join(src, path.replace(/\.css$/, sassExtension)),
        sassDir = dirname(sassPath);

    if (root) {
      cssPath = join(root, dest, path.replace(new RegExp('^' + dest), ''));
      sassPath = join(root, src, path
        .replace(new RegExp('^' + dest), '')
        .replace(/\.css$/, sassExtension));
      sassDir = dirname(sassPath);
    }

    log('debug', 'source', sassPath);
    log('debug', 'dest', options.response ? '<response>' : cssPath);

    // When render is done, respond to the request accordingly
    var done = function(err, result) {
      if (err) {
        var file = sassPath;
        if (err.file && err.file !== 'stdin') {
          file = err.file;
        }

        var fileLineColumn = file + ':' + err.line + ':' + err.column;
        var errorMessage = (beep ? '\x07' : '') + '\x1B[31m' + err.message.replace(/^ +/, '') + '\n\nin ' + fileLineColumn + '\x1B[91m';

        error(err, errorMessage);

      }

      var data = result.css;

      log('debug', 'render', options.response ? '<response>' : sassPath);

      if (sourceMap) {
        log('debug', 'render', this.options.sourceMap);
      }
      imports[sassPath] = result.stats.includedFiles;

      var cssDone = true;
      var sourceMapDone = true;

      function doneWriting() {
        if (!cssDone || !sourceMapDone) {
          return;
        }

        if (options.response === false) {

        }


      }

      // If response is true, do not write to file
      if (options.response) {
        return doneWriting();
      }

      cssDone = false;
      sourceMapDone = !sourceMap;

      mkdirp(dirname(cssPath), '0700', function(err) {
        if (err) {
          error(err);
          cssDone = true;
          return doneWriting();
        }

        fs.writeFile(cssPath, data, 'utf8', function(err) {
          log('debug', 'write', cssPath);

          if (err) {
            error(err);
          }

          cssDone = true;
          doneWriting();
        });
      });

      if (sourceMap) {
        var sourceMapPath = this.options.sourceMap;
        mkdirp(dirname(sourceMapPath), '0700', function(err) {
          if (err) {
            error(err);
            sourceMapDone = true;
            return doneWriting();
          }

          fs.writeFile(sourceMapPath, result.map, 'utf8', function(err) {
            log('debug', 'write', sourceMapPath);

            if (err) {
              error(err);
            }

            sourceMapDone = true;
            doneWriting();
          });
        });
      }
    };

    // Compile to cssPath
    var compile = function() {
      fs.exists(sassPath, function(exists) {
        log('debug', 'read', sassPath);

        if (!exists) {
          log('debug', 'skip', sassPath, 'does not exist');
          return next();
        }

        imports[sassPath] = undefined;

        var style = options.compile();

        var renderOptions = util._extend({}, options);

        renderOptions.file = sassPath;
        renderOptions.outFile = options.outFile || cssPath;
        renderOptions.includePaths = [sassDir].concat(options.includePaths || []);

        style.render(renderOptions, done);
      });
    };

    // Force
    if (force) {
      return compile();
    }

    // Re-compile on server restart, disregarding
    // mtimes since we need to map imports
    if (!imports[sassPath]) {
      return compile();
    }

    // Compare mtimes
    fs.stat(sassPath, function(err, sassStats) {
      if (err) { // sassPath can't be accessed, nothing to compile
        log('debug', 'skip', sassPath, 'is unreadable');
        return next();
      }

      fs.stat(cssPath, function(err, cssStats) {
        if (err) {
          if (err.code === 'ENOENT') { // CSS has not been compiled, compile it!
            log('debug', 'compile', cssPath, 'was not found');
            return compile();
          }

          error(err);
          return next(err);
        }

        if (sassStats.mtime > cssStats.mtime) { // Source has changed, compile it
          log('debug', 'compile', sassPath, 'was modified');
          return compile();
        }

        // Already compiled, check imports
        checkImports(sassPath, cssStats.mtime, function(changed) {
          if (debug && changed && changed.length) {
            changed.forEach(function(path) {
              log('debug', 'compile', path, '(import file) was modified');
            });
          }
          changed && changed.length ? compile() : next();
        });
      });
    });
  };
};

/**
 * Check `path`'s imports to see if they have been altered.
 *
 * @param {String} path
 * @param {Function} fn
 * @api private
 */

function checkImports(path, time, fn) {
  var nodes = imports[path];
  if (!nodes || !nodes.length) {
    return fn();
  }

  var pending = nodes.length,
      changed = [];

  // examine the imported files (nodes) for each parent sass (path)
  nodes.forEach(function(imported) {
    fs.stat(imported, function(err, stat) {
      // error or newer mtime
      if (err || stat.mtime >= time) {
        changed.push(imported);
      }
      // decrease pending, if 0 call fn with the changed imports
      --pending || fn(changed);
    });
  });
}
