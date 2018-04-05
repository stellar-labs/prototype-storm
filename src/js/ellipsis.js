'use strict'
export default String.prototype.ellipsis = function({max = 0, end = '...'} = {}) {
  return this.substr(0, max) + ((max >= this.length) ? '' : end)
}
