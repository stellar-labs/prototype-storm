/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/is-object.js';

describe('is-object', function() {
    it('should exists', function() {
        should.exist(Object.prototype.isObject);
    });

    // ...
});
