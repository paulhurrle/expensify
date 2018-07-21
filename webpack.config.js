const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => { // by calling a function here that returns an object, instead of simply exporting the object directly, decreases bundle size!
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css'); // this is where the styles are going to be dumped
  
  return {
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
        use: CSSExtract.extract({ // need 'use' anytime you have more than one loader
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', // this is for setting up source maps
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};