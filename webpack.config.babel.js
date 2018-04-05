'use strict'
import mode from './webpack/mode.babel.js'
import fileEntries from './webpack/fileEntries.babel.js'
import filesConcat from './webpack/filesConcat.babel.js'
export default env => {
  return {
    ...mode(env),
    entry: {
      ...fileEntries(`${__dirname}/src/js`),
      'prototype-storm': filesConcat(`${__dirname}/src/js`)
    },
    output: {
      path: `${__dirname}/dist/`,
      filename: '[name].min.js'
    }
  }
}
