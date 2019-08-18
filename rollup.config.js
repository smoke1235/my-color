/* global require, process, module */
const buble = require('rollup-plugin-buble');               // https://buble.surge.sh/guide/
const commonjs = require('rollup-plugin-commonjs');         // https://github.com/rollup/rollup-plugin-commonjs
import { eslint } from 'rollup-plugin-eslint';
const nodeResolve = require('rollup-plugin-node-resolve');  // https://github.com/rollup/rollup-plugin-node-resolve
import { uglify } from "rollup-plugin-uglify";            // https://github.com/TrySound/rollup-plugin-uglify
const builtins =  require('rollup-plugin-node-builtins');
import babel from 'rollup-plugin-babel';

var isProduction = (process.env.NODE_ENV === 'production');
isProduction = false;
const plugins = [
	builtins(),
	nodeResolve({ jsnext: true, main: true }),
	commonjs({ include: 'node_modules/**' }),
	eslint({}),
	babel({
      exclude: 'node_modules/**',
	  "plugins": ["transform-class-properties"]
    })
];

if (isProduction) {
	plugins.push(uglify());
}

module.exports = {
	plugins,
	input: 'src/index.js',
	output: {
		file: 'public/js/index.js',
		format: 'iife',
		name: 'Color'
	}
};
