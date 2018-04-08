'use strict'

/**
 * @see https://unicode-table.com
 */
if( 'to-ascii' in String.prototype === false ) {
	String.prototype.toAscii = function() {
		let string = this;
		let length = string.length;

		let counterpart = {
			'À': 'A',
			'Á': 'A',
			'Â': 'A',
			'Ã': 'A',
			'Ä': 'A',
			'Å': 'A',
			'Æ': 'AE',
			'Ç': 'C',
			'È': 'E',
			'É': 'E',
			'Ê': 'E',
			'Ë': 'E',
			'Ì': 'I',
			'Í': 'I',
			'Î': 'I',
			'Ï': 'I',
			'Ð': 'D',
			'Ñ': 'N',
			'Ò': 'O',
			'Ó': 'O',
			'Ô': 'O',
			'Õ': 'O',
			'Ö': 'O',
			'×': 'x',
			'Ø': 'O',
			'Ù': 'U',
			'Ú': 'U',
			'Û': 'U',
			'Ü': 'U',
			'Ý': 'Y',
			'Þ': 'TH',
			'ß': 'S',
			'à': 'a',
			'á': 'a',
			'â': 'a',
			'ã': 'a',
			'ä': 'a',
			'å': 'a',
			'æ': 'ae',
			'œ': 'oe',
			'ç': 'c',
			'è': 'e',
			'é': 'e',
			'ê': 'e',
			'ë': 'e',
			'ì': 'i',
			'í': 'i',
			'î': 'i',
			'ï': 'i',
			'ð': 'ED',
			'ñ': 'n',
			'ò': 'o',
			'ó': 'o',
			'ô': 'o',
			'õ': 'o',
			'ö': 'o',
			'ù': 'u',
			'ú': 'u',
			'û': 'u',
			'ü': 'u',
			'ý': 'y',
			'þ': 'th',
			'ÿ': 'y',
			'Ā': 'A',
			'ā': 'a',
			'Ă': 'A',
			'ă': 'a',
			'Ą': 'A',
			'ą': 'a',
			'Ć': 'C',
			'ć': 'c',
			'Ĉ': 'c',
			'ĉ': 'c',
			'Ċ': 'C',
			'ċ': 'c',
			'Č': 'C',
			'č': 'c',
			'Ď': 'D'
			/**
			 * @todo to be continued
			 */
		};

		for( let i = 0; i < length; i++ ) {
			let character = string.charAt(i);      
      		let replacement = counterpart[character];

			if( replacement !== undefined ) {      
				string = string.replace(character, replacement);
			}
		}
    
    	return string;
	};
}

export default String.prototype.toAscii;
