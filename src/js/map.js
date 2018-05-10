'use strict';
export default (() => {
  if ('map' in Object === false) {
    Object.prototype.map = function(callback) {
      if (this.constructor === Object) {
        return Object.entries(this).map(([index, value], array) => {
          return callback(value, index, array);
        });
      }
      return;
    };
  }
})();
