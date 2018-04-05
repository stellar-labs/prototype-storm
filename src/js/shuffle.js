'use strict'
export default String.prototype.shuffle = function() {
  const copy = [...this]
  const result = []
  for (let i = 0; i < this.length; i++) {
    const index = Math.floor(Math.random() * copy.length)
    result.push(copy[index])
    copy.splice(index, 1)
  }
  return result.join('')
}
