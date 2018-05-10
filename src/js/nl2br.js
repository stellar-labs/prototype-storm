'use strict';
export default (() => {
  if ('nl2br' in Object === false) {
    Object.prototype.nl2br = function({strict = false} = {}) {
      if (this.constructor === String) {
        return this.replace(/\n|\r\n/gm, strict ? '<br/>' : '<br>');
      }
      if (this.constructor === Array) {
        return this.map(value => {
          if (/\n|\r\n/.test(value)) {
            return value.replace(/\n|\r\n/gm, strict ? '<br/>' : '<br>');
          }
          return value;
        });
      }
      return this;
    };
  }
})();
