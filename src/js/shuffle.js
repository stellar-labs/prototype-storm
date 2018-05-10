'use strict';
export default (() => {
  if ('shuffle' in Object === false) {
    Object.prototype.shuffle = function() {
      if (this.constructor === Array) {
        return this.reduce((accumulator, current, index) => {
          const random = Math.floor(Math.random() * accumulator.length);
          [accumulator[index], accumulator[random]] = [accumulator[random], accumulator[index]];
          return accumulator;
        }, this.slice());
      }
      if (this.constructor === String) {
        return [...this].reduce((accumulator, current, index) => {
          const random = Math.floor(Math.random() * accumulator.length);
          [accumulator[index], accumulator[random]] = [accumulator[random], accumulator[index]];
          return accumulator;
        }, [...this]).join('');
      }
      if (this.constructor === Number) {
        return Number([...this.toString()].reduce((accumulator, current, index) => {
          const random = Math.floor(Math.random() * accumulator.length);
          [accumulator[index], accumulator[random]] = [accumulator[random], accumulator[index]];
          return accumulator;
        }, [...this.toString()]).join(''));
      }
      return this;
    };
  }
})();
