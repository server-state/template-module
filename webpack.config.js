const nodeExternals = require('webpack-node-externals');

module.exports = {
	output: {
		path: __dirname,
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		fallback: {}
	},
	externals: [nodeExternals()]
};
