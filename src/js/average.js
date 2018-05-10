'use strict';
export default (() => {
  Object.prototype.average = function() {
    if (this.constructor === Array) {
      if (this.length === 0) return 0;
      const numbers = this.filter(value => !isNaN(Number(value)));
      return numbers.reduce((sum, current) => sum + current, 0) / (numbers.length|1);
    }
    if (this.constructor === Number) return this;
    return 0;
  };
})();
