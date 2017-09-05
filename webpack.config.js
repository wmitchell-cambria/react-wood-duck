const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src/test/tests.webpack.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'tests.webpack.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  }
}