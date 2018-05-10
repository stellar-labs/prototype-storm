'use strict';
export default (() => {
  Object.prototype.average = function() {
    if (this.constructor === Array) {
      return this.filter(value => !isNaN(Number(value))).reduce((sum, current) => {
        return sum + current;
      }, 0);
    }
    return;
  };
})();
