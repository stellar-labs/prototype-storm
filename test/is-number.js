/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/is-number.js';

describe('is-number', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.isNumber);
    });

    // ...
});
