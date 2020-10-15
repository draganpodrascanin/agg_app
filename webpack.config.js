const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		home: './public/javascript/home.js',
		gas: './public/javascript/gas.js',
		slep: './public/javascript/slep.js',
		mehanika: './public/javascript/mehanika.js',
		error404: './public/javascript/error404.js',
		userlogin: './public/javascript/userlogin.js',
		eknjizica: './public/javascript/eknjizica.js',
		map: './public/javascript/components/map.js',
	},
	output: {
		path: path.resolve(__dirname, './public/javascript/build'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
		],
	},
};
