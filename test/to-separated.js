/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/to-separated.js';

describe('to-separated', function() {
    it('should exists', function() {
        should.exist(Object.prototype.toSeparated);
    });

    it('should return an empty string if the array is empty', function() {
        [].toSeparated().should.equal('');
    });

    it('should return the separated string from an array', function() {
        ['php', 'javascript', 'mysql'].toSeparated().should.equal('php,javascript,mysql');
    });

    it('should return the separated string with the desired separator from an array', function() {
        ['php', 'javascript', 'mysql'].toSeparated({ separator: ', ' }).should.equal('php, javascript, mysql');
    });

    it('should return the separated string with the desired separator and finisher from an array', function() {
        ['travel', 'moutain climb', 'nature'].toSeparated({ separator: ', ', finisher: ' and ' }).should.equal('travel, moutain climb and nature');
    });

    it('should return the separated string with the separator sometimes included in the s', function() {
        ['this, sentence', 'is maybe', 'not, useful'].toSeparated({ separator: ',' }).should.equal('this, sentence,is maybe,not, useful');
    });

    it('should return the separated string with the finisher sometimes in the s', function() {
        ['i am', 'really, not', 'inspired this evening'].toSeparated({ separator: ',', finisher: ',' }).should.equal('i am,really, not,inspired this evening');
    });

    it('should return the separated string with a finisher only', function() {
        ['php', 'javascript', 'nodejs'].toSeparated({ finisher: ' and ' }).should.equal('php,javascript and nodejs');
    });

    it('should return the first  if there is only one ', function() {
        ['php'].toSeparated().should.equal('php');
    });

    it('should return the s separated with the separator if there is no finisher', function() {
        ['php', 'mysql'].toSeparated().should.equal('php,mysql');
    });

    it('should return the s separated with the finisher only if there is only two s and the finisher is set', function() {
        ['php', 'mysql'].toSeparated({ finisher: ' and ' }).should.equal('php and mysql');
    });

    it('should throw an exception if the separator is not a string', function() {
        should.Throw(function() {
            [].toSeparated({ separator: [',', '-'] });
        }, 'toSeparated() expects options "separator" to be a string');
    });

    it('should throw an exception if the separator is null', function() {
        should.Throw(function() {
            [].toSeparated({ separator: null });
        }, 'toSeparated() expects options "separator" to be a string');
    });

    it('should throw an exception if the separator is undefined', function() {
        should.Throw(function() {
            [].toSeparated({ separator: undefined });
        }, 'toSeparated() expects options "separator" to be a string');
    });

    it('should throw an exception if the finisher is not a string', function() {
        should.Throw(function() {
            [].toSeparated({ separator: ',', finisher: ['and', 'or'] });
        }, 'toSeparated() expects options "finisher" to be a string');
    });

    it('should throw an exception if the finisher is null', function() {
        should.Throw(function() {
            [].toSeparated({ separator: ',', finisher: null });
        }, 'toSeparated() expects options "finisher" to be a string');
    });

    it('should throw an exception if the finisher is undefined', function() {
        should.Throw(function() {
            [].toSeparated({ separator: ',', finisher: undefined });
        }, 'toSeparated() expects options "finisher" to be a string');
    });
});
