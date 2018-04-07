'use strict'

if( 'replace-all' in String.prototype === false ) {
	String.prototype.replaceAll = function(options) {
		if( options === undefined ) {
			throw new Error('String.prototype.replaceAll expects the following options to be set: "old", "new".');
		}

		if( 'old' in options === false ) {
			throw new Error('String.prototype.replaceAll expects options "old" to be set.');
		}

		if( 'new' in options === false ) {
			throw new Error('String.prototype.replaceAll expects options "new" to be set.');
		}

		return this.split(options.old).join(options.new);
	};
}

export default String.prototype.replaceAll;
