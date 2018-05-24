/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/to-snake-case.js';

describe('to-snake-case', function() {
    it('should exists', function() {
        should.exist(Object.prototype.toSnakeCase);
    });

    it('should return the same snake cased string', function() {
        const text = 'snake_case_for_variable_names';

        text.toSnakeCase().should.equal(text);
    });

    it('should convert kebab case', function() {
        'kebab-case-for-slugs'.toSnakeCase().should.equal('kebab_case_for_slugs');
    });

    it('should convert camel case', function() {
        'camelCaseForMethodNames'.toSnakeCase().should.equal('camel_case_for_method_names');
    });

    it('should convert pascal case', function() {
        'PascalCaseForClassNames'.toSnakeCase().should.equal('pascal_case_for_class_names');
    });

    it('should convert sentence case', function() {
        'Sentence case for normal sentences, and paragraphs.'.toSnakeCase().should.equal('sentence_case_for_normal_sentences_and_paragraphs');
    });

    it('should convert normal case', function() {
        'normal case for short texts'.toSnakeCase().should.equal('normal_case_for_short_texts');
    });

    it('should convert sentence case with uppercases', function() {
        'AMP and PWA are not adversaries'.toSnakeCase().should.equal('amp_and_pwa_are_not_adversaries');
    });
});
