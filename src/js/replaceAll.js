'use strict';
export default (() => {
  if ('replaceAll' in Object === false) {
    /**
     * @todo do some testings
     * @todo extends replaceAll to some other scalar types
     */
    Object.prototype.replaceAll = function(oldValue, newValue) {
      if (this.constructor === String) {
        return this.split(oldValue).join(newValue);
      }
      return this;
    };
  }
})();
