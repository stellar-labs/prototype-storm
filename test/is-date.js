/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/is-date.js';

describe('is-date', function() {
    it('should exists', function() {
        should.exist(Object.prototype.isDate);
    });

    // ...
});
