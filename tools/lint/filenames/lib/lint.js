'use strict';

// MODULES //

var basename = require( 'path' ).basename; // TODO: use stdlib module
var stdlib = require( './stdlib.js' );
var extname = require( stdlib+'@stdlib/utils/extname' );
var indexOf = require( stdlib+'@stdlib/utils/index-of' );
var lowercase = require( stdlib+'@stdlib/utils/lowercase' );
var EXTENSIONS = require( './extensions.json' );
var SPECIAL = require( './special.json' );


// VARIABLES //

// Only allow alphanumeric characters, `.`, `_`, or `-`:
var BANNED_CHARS = /[^a-zA-Z0-9._-]/; // If this is changed, be sure to update the associated error message


// LINT //

/**
* Lints an array of filenames.
*
* @private
* @param {StringArray} arr - array of filenames
* @returns {(ObjectArray|EmptyArray)} array of failing filenames
*/
function lint( arr ) {
	var lower;
	var fname;
	var ext;
	var out;
	var i;

	out = [];
	for ( i = 0; i < arr.length; i++ ) {
		fname = basename( arr[ i ] );
		lower = lowercase( fname );

		// Check that the filename has an allowed extension (if one exists)...
		ext = extname( fname );
		if (
			ext !== '' &&
			indexOf( EXTENSIONS, ext ) === -1
		) {
			out.push({
				'name': arr[ i ],
				'error': 'filename does not have a supported extension name.'
			});
			continue;
		}
		// Remove the extension:
		lower = lower.substring( 0, fname.length-ext.length );

		// Check if the filename is a special case...
		if ( SPECIAL[ lower ] ) {
			if ( SPECIAL[ lower ] !== fname ) {
				out.push({
					'name': arr[ i ],
					'error': 'filename should be `'+SPECIAL[ lower ]+'`.'
				});
			}
			continue;
		}
		// Remove the extension:
		fname = fname.substring( 0, fname.length-ext.length );

		// Check that the filename is lowercase (if not Markdown)...
		if (
			ext !== '.md' &&
			fname !== lower
		) {
			out.push({
				'name': arr[ i ],
				'error': 'filename must be lowercase.'
			});
			continue;
		}
		// Check if the filename contains banned characters...
		if ( BANNED_CHARS.test( fname ) ) {
			out.push({
				'name': arr[ i ],
				'error': 'filename must only contain the following characters: [a-zA-Z0-9._-].'
			});
			continue;
		}
	}
	return out;
} // end FUNCTION lint()


// EXPORTS //

module.exports = lint;
