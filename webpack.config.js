const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'babel-polyfill',
    './index.web.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'Promise': 'es6-promise',
      'fetch': 'whatwg-fetch'
    }
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react', 'react-hmre'],
        }
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
