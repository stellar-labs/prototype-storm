'use strict'
export default String.prototype.nl2br = function({strict = false} = {}) {
  return this.replace(/\n/gm, strict ? '<br/>' : '<br>')
}
