'use strict';

// MODULES //

var debug = require( 'debug' )( 'search-create:get-existing' );
var exists = require( '@stdlib/fs/exists' );


// MAIN //

/**
* Filters out non-existing file paths.
*
* @private
* @param {StringArray} files - file paths
* @param {Callback} clbk - callback function
*/
function getExisting( files, clbk ) {
	var out = [];
	var i = 0;

	exists( files[ i ], onDone );
	/**
	* Appends path to output array in case the file exists. Once all checks have completed, the callback is invoked.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} boolean indicating if file exists
	*/
	function onDone( err, bool ) {
		if ( err ) {
			debug( err );
		}
		if ( bool ) {
			out.push( files[ i ] );
		}
		i += 1;
		if ( i === files.length ) {
			clbk( null, out );
		} else {
			exists( files[ i ], onDone );
		}
	} // end FUNCTION onDone()
} // end FUNCTION getExisting()


// EXPORTS //

module.exports = getExisting;
