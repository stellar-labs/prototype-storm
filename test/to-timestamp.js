/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/to-timestamp.js';

describe('to-timestamp', function() {
    it('should exists', function() {
        should.exist(Object.prototype.toTimestamp);
    });

    it('should return the correct timestamp', function() {
        new Date('2018-01-01T00:00:00+00:00').toTimestamp().should.equal(1514764800);
    });
});
