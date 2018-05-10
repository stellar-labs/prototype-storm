'use strict';
const path = require('path');
const fs = require('fs');
module.exports = {
  target: 'node',
  mode: 'production',
  entry: Object.assign({
    'prototype-storm': fs.readdirSync(path.resolve(__dirname, '..', 'src', 'js')).map(filename => {
      return path.resolve(__dirname, '..', 'src', 'js', filename);
    })
  }, fs.readdirSync(path.resolve(__dirname, '..', 'src', 'js')).reduce((list, filename) => {
    return Object.assign(list, { [`${filename.substring(0, filename.lastIndexOf('.'))}`]: path.resolve(__dirname, '..', 'src', 'js', filename) });
  }, {})),
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '..', 'dist')
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
