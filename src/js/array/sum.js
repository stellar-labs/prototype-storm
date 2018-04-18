'use strict'

if( 'sum' in Array.prototype === false ) {
	Array.prototype.sum = function() {
	  	let sum = 0;
	  	let result = 0;
	  	let item = 0;
	  
	  	this.every(function(item) {
	      	if(item === Infinity) {
	        	sum = item;
	        	
	        	return false;
	      	}

	      	result = parseFloat(item);

	      	sum += isNaN(result) ? 0 : result;
	      
	      	return true;
	  	}); 
	  
	  	return sum;
	}
}

export default Array.prototype.sum;
