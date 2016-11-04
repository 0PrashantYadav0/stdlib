'use strict';

// MODULES //

var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var SMART_DOUBLE_QUOTES = /[\u201C\u201D\u201E\u201F]/g;
var SMART_SINGLE_QUOTES = /[\u2018\u2019\u201A\u201B]/g;


// MAIN //

/**
* Transforms raw reference output.
*
* @private
* @param {string} raw - raw output
* @returns {string} transformed output
*
* @example
* var raw = 'Bays, Carter, and S. D. Durham. 1976. “Improving a Poor Random Number Generator.” *ACM Trans. Math. Softw.* 2 (1). New York, NY, USA: ACM: 59–64. doi:[10.1145/355666.355670](http://dx.doi.org/10.1145/355666.355670).'
*
* var out = transform( raw );
* // returns 'Bays, Carter, and S. D. Durham. 1976. "Improving a Poor Random Number Generator." *ACM Trans. Math. Softw.* 2 (1). New York, NY, USA: ACM: 59–64. doi:[10.1145/355666.355670](http://dx.doi.org/10.1145/355666.355670).'
*/
function transform( raw ) {
	raw = replace( raw, SMART_SINGLE_QUOTES, '\'' );
	raw = replace( raw, SMART_DOUBLE_QUOTES, '\"' );
	return raw;
} // end FUNCTION transform()


// EXPORTS //

module.exports = transform;
