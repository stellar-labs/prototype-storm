'use strict'

import './replace-all.js';

if( 'format' in String.prototype === false ) {
	String.prototype.format = function(options) {
		let text = this;

		for( let key in options ) {
			text = text.replaceAll({ old: '{' + key + '}', new: options[key] });
		}

		return text;
	};
}

export default String.prototype.format;
