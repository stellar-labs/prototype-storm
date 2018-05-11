/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/is-array.js';

describe('is-array', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.isArray);
    });

    // ...
});
