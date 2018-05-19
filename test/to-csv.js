/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/to-csv.js';

describe('to-csv', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.toCsv);
    });

    describe('it should return the string representation of a simple double dimension array', function() {
        const input = [
            ['Name', 'Birth date', 'Role', 'Prefered language'],
            ['John', '1970-01-01', 'Co-founder', 'Javascript,PHP'],
            ['Paul', '1990-01-12', 'Co-founder', 'Javascript'],
            ['Mark', '1900-12-01', 'CTO', 'C#']
        ];

        const expected = `Name,Birth date,Role,Prefered language
John,1970-01-01,Co-founder,"Javascript,PHP"
Paul,1990-01-12,Co-founder,Javascript
Mark,1900-12-01,CTO,C#`;

        input.toCsv().should.equal(expected);
    });
});
