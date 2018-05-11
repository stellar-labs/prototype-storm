'use strict';
export default (() => {
  if ('only' in Object === false) {
    /**
     * @todo add some type checking for other types of search in the array constructor
     * @todo do some testing for the only method
     * @todo extend only to some other scalar types
     */
    Object.prototype.only = function(search = []) {
      if (this.constructor === Array) {
        return this.filter(value => search.constructor === Array ? search.includes(value) : search.constructor === String ? value === value : value);
      }
      return this;
    };
  }
})();
