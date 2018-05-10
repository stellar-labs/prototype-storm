'use strict';
export default (() => {
  if ('sum' in Object === false) {
    Object.prototype.sum = function() {
      if (this.constructor === Array) {
        this.reduce((accumulator, current) => {
          return accumulator + Number(current)|0;
        }, 0);
      }
      return 0;
    };
  }
})();
