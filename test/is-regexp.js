/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/is-regexp.js';

describe('is-regexp', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.isRegexp);
    });

    // ...
});
