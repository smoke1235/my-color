/* global require, process, module */
const buble = require('rollup-plugin-buble');               // https://buble.surge.sh/guide/
const commonjs = require('rollup-plugin-commonjs');         // https://github.com/rollup/rollup-plugin-commonjs
import { eslint } from 'rollup-plugin-eslint';
const nodeResolve = require('rollup-plugin-node-resolve');  // https://github.com/rollup/rollup-plugin-node-resolve
import { uglify } from "rollup-plugin-uglify";            // https://github.com/TrySound/rollup-plugin-uglify
const builtins =  require('rollup-plugin-node-builtins');
import babel from 'rollup-plugin-babel';

var isProduction = (process.env.BUILD === 'production');

const plugins = [
	builtins(),
	nodeResolve({ jsnext: true, main: true }),
	commonjs({ include: 'node_modules/**' }),
	eslint({}),
	babel({
		babelrc: false,
		presets: [["@babel/preset-env", { modules: false }]],
		exclude: 'node_modules/**',
		"plugins": ["transform-class-properties"]
	})
];

var filename = 'public/js/index.js';
if (isProduction) {
	plugins.push(uglify());
	filename = 'public/js/index.min.js';
}

module.exports = {
	plugins,
	input: 'src/index.js',
	output: {
		file: filename,
		format: 'iife',
		name: 'Color'
	}
};
