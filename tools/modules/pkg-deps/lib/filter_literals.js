'use strict';

// MODULES //

var RE_RELATIVE = require( './re_relative.js' );


// MAIN //

/**
* Filters a list for strings matching a relative require/import statement.
*
* @private
* @param {StringArray} list - list of strings
* @returns {Object} filtered lists
*/
function filter( list ) {
	var out;
	var i;
	out = {
		'relative': [],
		'packages': []
	};
	for ( i = 0; i < list.length; i++ ) {
		if ( RE_RELATIVE.test( list[ i ] ) ) {
			out.relative.push( list[ i ] );
		} else {
			out.packages.push( list[ i ] );
		}
	}
	return out;
} // end FUNCTION filter()


// EXPORTS //

module.exports = filter;
