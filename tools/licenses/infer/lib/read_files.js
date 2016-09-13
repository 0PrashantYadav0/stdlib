'use strict';

// MODULES //

var debug = require( 'debug' )( 'licenses:infer:read-files' );
var prefix = require( './stdlib.js' );
var readFile = require( prefix+'@stdlib/fs/read-file' );


// READ FILES //

/**
* Reads a list of files.
*
* @private
* @param {StringArray} files - file list
* @param {Callback} clbk - callback to invoke after reading files
*/
function readFiles( files, clbk ) {
	var count;
	var opts;
	var out;
	var i;

	out = {};
	if ( files.length === 0 ) {
		debug( 'No files to read.' );
		return clbk( null, out );
	}
	count = 0;
	opts = {
		'encoding': 'utf8'
	};
	debug( 'Reading %d files...', files.length );
	for ( i = 0; i < files.length; i++ ) {
		debug( 'Reading file: %s.', files[ i ] );
		readFile( files[ i ], opts, onRead( i ) );
	}
	/**
	* Returns a callback to be invoked upon reading a file.
	*
	* @private
	* @param {NonNegativeInteger} idx - index
	* @returns {Callback} callback
	*/
	function onRead( idx ) {
		/**
		* Callback to be invoked upon reading a file.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {(Buffer|string)} data - file content
		*/
		return function onRead( error, data ) {
			if ( error ) {
				debug( 'Encountered an error while attempting to read file: %s. Error: %s.', files[ idx ], error.message );
				return clbk( error );
			}
			count += 1;

			debug( 'Successfully read file: %s.', files[ idx ] );
			out[ files[ idx ] ] = data.toString();

			debug( 'Read %d of %d files.', count, files.length );
			if ( count === files.length ) {
				debug( 'Finished reading files.' );
				clbk( null, out );
			}
		}; // end FUNCTION onRead()
	} // end FUNCTION onRead()
} // end FUNCTION readFiles()


// EXPORTS //

module.exports = readFiles;
