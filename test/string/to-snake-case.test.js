'use strict'

var should = require('chai').should();

import toSnakeCase from '../../src/js/string/to-snake-case.js';

describe('String', function() {
	describe('toSnakeCase', function() {
		it('should return the same string', function() {
			var text = 'already_snake_case';
			text.toSnakeCase().should.equal(text);
		});

		it('should convert to snake case', function() {
			'List rows to update'.toSnakeCase().should.equal('list_rows_to_update');
		});

		it('should convert to snake case with non ascii', function() {
			'Liste des données à mettre à jour'.toSnakeCase().should.equal('liste_des_données_à_mettre_à_jour');
		});

		it('should convert kebab case', function() {
			'kebab-are-so-delicious'.toSnakeCase().should.equal('kebab_are_so_delicious');
		});

		it('should convert kebab case with non ascii', function() {
			'les-kébabs-sont-si-délicieux'.toSnakeCase().should.equal('les_kébabs_sont_si_délicieux');
		});

		it('should convert camel case', function() {
			'camelCaseEveryWhere'.toSnakeCase().should.equal('camel_case_every_where');
		});

		it('should convert camel case with non ascii', function() {
			// 'étéAutomneHiverNoël'.toSnakeCase().should.equal('été_automne_hiver_noël');
		});

		it('should convert pascal case', function() {
			'PascalCaseForClasses'.toSnakeCase().should.equal('pascal_case_for_classes');
		});

		it('should convert pascal case with non ascii', function() {
			'LeFrançaisEstAccentué'.toSnakeCase().should.equal('le_français_est_accentué');
		});

		it('should convert string with non letters characters', function() {
			'^^ you should try, but really :$, with non letters !!'.toSnakeCase().should.equal('you_should_try_but_really_with_non_letters');
		});
	});
});
