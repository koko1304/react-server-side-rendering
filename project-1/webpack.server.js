const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

// Base configuration file
const baseConfig = require('./webpack.base.js');

const config = {
	// Inform webpack that we're building a bundle
	// for nodejs, rather than for the browser
	target: 'node',

	// Tell webpack the root file of our server application
	entry: './src/server/index.js',

	// Tell webpack where to put the output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build/server')
	},

	// Tell webpack do not include all the libraries (express, react, ...) into final bundle file
	externals: [webpackNodeExternals()]
}

// merge baseconfig and config together as single object
module.exports = merge(baseConfig, config);