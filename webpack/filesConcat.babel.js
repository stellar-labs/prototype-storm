'use strict'
import fs from 'fs'
export default path => fs.readdirSync(path).filter(file => file !== '.gitignore').map(file => `${path}/${file}`)
