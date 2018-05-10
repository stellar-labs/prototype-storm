'use strict';
export default (() => {
  if ('empty' in Object === false) {
    Object.prototype.empty = function() {
      if (this.constructor === Object) {
        return Object.keys(this).length === 0;
      }
      if (this.constructor === Array) {
        return this.length === 0;
      }
      if (this.constructor === String) {
        return this.length === 0;
      }
      if (this.constructor === Number) {
        return this === 0;
      }
      return;
    };
  }
})();
