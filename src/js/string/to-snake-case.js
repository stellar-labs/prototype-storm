'use strict'

if( 'to-snake-case' in String.prototype === false ) {
	String.prototype.toSnakeCase = function() {
		return this.replace(/[^\u0041-\u005A\u0061-\u007A\u00E9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u024F\u1E02-\u1EF3\u0259\u027C\u0292\u0370-\u0373\u0376\u0377\u037F\u0386\u0388-\u03CE\u03D8-\u03EF\u03F3\u03F8\u03FB\u0400-\u0481\u048A-\u04A3\u04A6-\u04B3\u04B6-\u04D3\u04D6\u04FF0-9_]/g, '_').replace(/([a-z])([A-Z])/g, '$1_$2').replace(/[_]{2,}/g, '_').replace(/^_|_$/g, '').toLowerCase();
	};
}

export default String.prototype.toSnakeCase;
