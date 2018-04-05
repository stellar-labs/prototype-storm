'use strict'
import fs from 'fs'
const files = fs.readdirSync(`${__dirname}/src/js`)
export default env => {
  return {
    mode: env.production ? 'production': 'development',
    entry: {
      ...files.reduce((entries, file) => {
        return Object.assign(entries, {
          [`${file.substring(0, file.indexOf('.'))}`]: `${__dirname}/src/js/${file}`
        })
      }, {}),
      string: files.map(file => `${__dirname}/src/js/${file}`)
    },
    output: {
      path: `${__dirname}/dist/`,
      filename: '[name].min.js'
    }
  }
}
