'use strict';

/**
* Return a reference corresponding to a citation identifier.
*
* @module @stdlib/tools/bib/citation-reference
*
* @example
* var toReference = require( '@stdlib/tools/bib/citation-reference' );
*
* toReference( '@press1992', clbk );
*
* function clbk( error, reference ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( reference );
* }
*
* @example
* var toReference = require( '@stdlib/tools/bib/citation-reference' );
*
* var ref = toReference.sync( '@press1992' );
* // returns '...'
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var toReference = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( toReference, 'sync', sync );


// EXPORTS //

module.exports = toReference;
