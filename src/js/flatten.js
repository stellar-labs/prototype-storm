'use strict';
export default (() => {
  if ('flatten' in Object === false) {
    Object.prototype.flatten = function() {
      if (this.constructor === Object) {
        return Object.entries(this).reduce((accumulator, [key, value]) => {
          return Object.assign(accumulator, value.constructor === Object ? Object.prototype.flatten.call(value) : {
            [`${key}`]: value
          });
        }, {});
      }
      if (this.constructor === Array) {
        return this.reduce((accumulator, current) => {
          return current.constructor === Array ? [...accumulator, ...Object.prototype.flatten.call(current)] : [...accumulator, current];
        }, []);
      }
      return;
    };
  }
})();
