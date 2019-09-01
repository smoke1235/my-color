var mysass  = require("./helpers/sass.js");

var srcPath = __dirname + '/sass/';
var destPath = __dirname + '/public/styles';



var a = mysass({
	src: srcPath,
	dest: destPath,
	debug: true,
	outputStyle: 'expanded',
	sourceMap: true,
	sourceMapEmbed: true,
	/*outputStyle: 'compressed'*/

})


a();
