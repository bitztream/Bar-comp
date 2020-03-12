const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/src/index.js'),
  output: {
    path: path.join(__dirname, '/client/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
