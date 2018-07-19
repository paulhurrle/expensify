const path = require('path');

module.exports = {
  entry: './src/app.js', // the entry point for the app
  output: {
    path: path.join(__dirname, 'public'), // absolute path on machine where webpack file will be ouputted
    filename: 'bundle.js' // can be anything
  },
  module: { // this is where specify loaders like babel-loader, also requires separate .babelrc file
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [ // need 'use' anytime you have more than one loader
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map', // this is for setting up source maps
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};