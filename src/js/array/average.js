'use strict'

if( 'average' in Array.prototype === false ) {
	Array.prototype.average = function() {
		let sum = 0;
		let count = 0;

		this.every(function(item) {
			if( item === Infinity ) {
				sum = item;

				return false;
			}

			sum += isNaN(parseFloat(item)) ? 0 : item;
			count += isNaN(parseFloat(item)) ? 0 : 1;

			return true;
		});

		return sum === Infinity ? Infinity : (sum === 0) ? 0 : (sum / count);
	};
}

export default Array.prototype.average;
