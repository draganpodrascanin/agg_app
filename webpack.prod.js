const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    home: './resources/javascript/home.js',
    gas: './resources/javascript/gas.js',
    slep: './resources/javascript/slep.js',
    mehanika: './resources/javascript/mehanika.js',
    error404: './resources/javascript/error404.js',
    userlogin: './resources/javascript/userlogin.js',
    eknjizica: './resources/javascript/eknjizica.js',
    forgotpassword: './resources/javascript/forgotpassword.js',
    resetpassword: './resources/javascript/resetpassword.js',
    map: './resources/javascript/components/map.js',
  },
  output: {
    path: path.resolve(__dirname, './public/javascript'),
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
