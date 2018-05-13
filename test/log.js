/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/log.js';

describe('log', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.log);
    });

    // ...
});
