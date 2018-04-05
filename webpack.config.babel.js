'use strict'
import fs from 'fs'
const files = fs.readdirSync(`${__dirname}/src/js`).filter(file => file !== '.gitignore')
export default env => {
  return {
    mode: env.production ? 'production': 'development',
    entry: {
      ...files.reduce((entries, file) => {
        return Object.assign(entries, {
          [`prototype-storm-${file.substring(0, file.indexOf('.'))}`]: `${__dirname}/src/js/${file}`
        })
      }, {}),
      'prototype-storm': files.map(file => `${__dirname}/src/js/${file}`)
    },
    output: {
      path: `${__dirname}/dist/`,
      filename: '[name].min.js'
    }
  }
}
