'use strict'
import fs from 'fs'
export default path => fs.readdirSync(path).filter(file => file !== '.gitignore').reduce((entries, file) => Object.assign(entries, {[`prototype-storm-${file.substring(0, file.indexOf('.'))}`]: `${path}/${file}`}), {})
