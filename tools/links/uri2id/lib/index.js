'use strict';

/**
* Return the id corresponding to a provided URI.
*
* @module @stdlib/tools/links/uri2id
*
* @example
* var uri2id = require( '@stdlib/tools/links/uri2id' );
*
* uri2id( 'http://www.bibtex.org/', clbk );
*
* function clbk( error, id ) {
*   if ( error ) {
*       throw error;
*   }
*   console.log( id );
* 	// => 'bibtex'
* }
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var uri2id = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( uri2id, 'sync', sync );


// EXPORTS //

module.exports = uri2id;
