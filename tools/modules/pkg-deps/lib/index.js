'use strict';

/**
* List package dependencies.
*
* @module @stdlib/tools/modules/pkg-deps
*
* @example
* var pkgDeps = require( '@stdlib/tools/modules/pkg-deps' );
*
* var files = [ '/foo/bar/index.js' ];
*
* pkgDeps( files, clbk );
*
* function clbk( error, deps ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( deps );
* }
*
* @example
* var pkgDeps = require( '@stdlib/tools/modules/pkg-deps' );
*
* var files = [ '/foo/bar/index.js' ];
*
* var deps = pkgDeps.sync( files );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var pkgDeps = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( pkgDeps, 'sync', sync );


// EXPORTS //

module.exports = pkgDeps;

