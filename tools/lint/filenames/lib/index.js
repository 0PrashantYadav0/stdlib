'use strict';

/**
* Lint filenames.
*
* @module @stdlib/tools/lint/filenames
*
* @example
* var lint = require( '@stdlib/tools/lint/filenames' );
*
* lint( onLint );
*
* function onLint( error, filenames ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( filenames );
* }
*
* @example
* var lint = require( '@stdlib/tools/lint/filenames' );
*
* var filenames = lint.sync();
* // returns [...]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var lint = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( lint, 'sync', sync );


// EXPORTS //

module.exports = lint;
