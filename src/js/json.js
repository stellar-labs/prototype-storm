'use strict';
export default (() => {
  if ('json' in Object === false) {
    Object.prototype.json = function() {
      return JSON.stringify(this);
    };
  }
})();
