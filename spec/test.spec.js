'use strict'

import test from '../src/js/test.js';

describe('test tests', function() {
	it('should correctly test the regexp', function() {
		expect( 'support@mycompany.com'.test({ regexp: '/.*@.*\.com/' }) ).toBeTruthy();
	});

	it('should throw an error if the regexp option is ommited', function() {
		expect( 'test'.test() ).toThrowError();
	});
});
