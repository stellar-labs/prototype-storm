'use strict';
export default (() => {
  if ('type' in Object === false) {
    /**
     * @todo do some testing for the type method
     * @todo maybe explode this method in <TYPE>.prototype.type() & <TYPE>.prototype.is(type) ?
     */
    Object.prototype.type = function(comparison = undefined) {
      if (comparison) {
        return this.constructor === comparison;
      }
      return this.constructor;
    };
  }
})();
