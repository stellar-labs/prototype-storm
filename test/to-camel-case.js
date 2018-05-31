/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/to-camel-case.js';

describe('to-camel-case', function() {
    it('should exists', function() {
        should.exist(Object.prototype.toCamelCase);
    });

    it('should convert kebab case', function() {
        'kebab-case-for-slugs'.toCamelCase().should.equal('kebabCaseForSlugs');
    });

    it('should convert snake case', function() {
        'snake_case_for_variable_name'.toCamelCase().should.equal('snakeCaseForVariableName');
    });

    it('should convert normal case', function() {
        'normal case for short text'.toCamelCase().should.equal('normalCaseForShortText');
    });

    it('should convert normal case with multiple spaces', function() {
        ' one sentence  without regular   spaces around '.toCamelCase().should.equal('oneSentenceWithoutRegularSpacesAround');
    });

    it('should convert sentence case with uppercase only parts', function() {
        'PWA and AMP are the bests tools around town!'.toCamelCase().should.equal('pwaAndAmpAreTheBestsToolsAroundTown');
    });

    it('should return an empty string if the string is empty', function() {
        const string = '';
        
        string.toCamelCase().should.equal(string);
    });
});
