/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/to-kebab-case.js';

describe('to-kebab-case', function() {
    it('should exists', function() {
        should.exist(Object.prototype.toKebabCase);
    });

    it('should return an empty string', function() {
        const text = '';

        text.toKebabCase().should.equal(text);
    });

    it('should return the same kebab cased string', function() {
        const text = 'to-kebab-case';

        text.toKebabCase().should.equal(text);
    });

    it('should convert pascal case', function() {
        'PascalCaseForClassName'.toKebabCase().should.equal('pascal-case-for-class-name');
    });

    it('should convert camel case', function() {
        'camelCaseForFunctionName'.toKebabCase().should.equal('camel-case-for-function-name');
    });

    it('should convert snake case', function() {
        'snake_case_for_variable_name'.toKebabCase().should.equal('snake-case-for-variable-name');
    });

    it('should convert normal case', function() {
        'Summer vibes are comming'.toKebabCase().should.equal('summer-vibes-are-comming');
    });

    it('should convert normal case with uppercases', function() {
        'Does AMP is opposed to PWA ?'.toKebabCase().should.equal('does-amp-is-opposed-to-pwa');
    });
});
