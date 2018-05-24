/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/is-boolean.js';

describe('is-boolean', function() {
    it('should exists', function() {
        should.exist(Object.prototype.isBoolean);
    });

    // ...
});
