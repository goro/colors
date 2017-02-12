require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: ['./lib/entry.js']
  },
  output: {
    path: path.resolve(__dirname, 'public', 'cache'),
    publicPath: 'cache/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015' ]
        }
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
}
