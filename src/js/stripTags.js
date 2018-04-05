'use strict'
export default String.prototype.stripTags = function() {
  return this.replace(/<(?:.|\n)*?>/gm, '')
}
