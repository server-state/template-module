module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true
	},
	plugins: ['prettier'],
	extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018
	},
	rules: {
		// treat wrong format as warning instead of error
		// to inform the user and not slap him
		'prettier/prettier': 'warn'
	},
	ignorePatterns: ['.eslintrc.js', '.prettierrc.js', 'rollup.config.js']
};
