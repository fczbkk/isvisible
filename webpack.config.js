const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './lib/'),
    library: 'isVisible',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      }
    ]
  }
};