'use strict';
const path = require('path');
module.exports = {
  mode: 'production',
  entry: {
    'test/test': path.resolve(__dirname, '..', 'src', 'test', 'test.spec.js')
  },
  output: {
    filename: '[name].spec.js',
    path: path.resolve(__dirname, '..')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      }
    ]
  }
};
