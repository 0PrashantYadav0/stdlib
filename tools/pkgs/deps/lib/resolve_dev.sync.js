'use strict';

// MODULES //

var debug = require( 'debug' )( 'pkg-deps:sync:resolve-dev' );
var glob = require( 'glob' ).sync;
var pkgDeps = require( '@stdlib/_tools/modules/pkg-deps' ).sync;
var transform = require( './transform.js' );
var setDifference = require( './set_difference.js' );


// MAIN //

/**
* Synchronously resolves package dev dependencies.
*
* @private
* @param {ObjectArray} pkgs - packages
* @param {Options} options - function options
* @returns {(ObjectArray|Error)} results or error object
*/
function resolve( pkgs, options ) {
	var results;
	var files;
	var gopts;
	var popts;
	var len;
	var pkg;
	var i;
	var k;

	len = pkgs.length;

	debug( 'Resolving %d packages...', len );
	for ( i = 0; i < len; i++ ) {
		pkg = pkgs[ i ].pkg;
		k = i + 1;

		debug( 'Resolving package: %s (%d of %d)...', pkg, k, len );
		gopts = {
			'cwd': pkgs[ i ].dir,
			'ignore': options.ignore,
			'realpath': true // absolute paths
		};
		debug( 'Glob options: %s', JSON.stringify( gopts ) );
		files = glob( options.pattern, gopts );

		if ( files.length === 0 ) {
			debug( 'No files matched for package: %s (%d of %d).', pkg, k, len );
			continue;
		}
		debug( 'Successfully matched files for package: %s (%d of %d).', pkg, k, len );

		debug( 'Removing previously resolved files...' );
		files = setDifference( files, pkgs[ i ].files );
		if ( files.length === 0 ) {
			debug( 'Package does not contain dev files: %s (%d of %d).', pkg, k, len );
			continue;
		}
		popts = {
			'walk': false, // walking is not necessary, as we globbed for everything
			'builtins': options.builtins
		};
		debug( 'Resolve options: %s', JSON.stringify( popts ) );
		results = pkgDeps( files, popts );
		if ( results instanceof Error ) {
			debug( 'Encountered an error when resolving package dev dependencies: %s (%d of %d). Error: %s', pkg, k, len, results.message );
			return results;
		}
		debug( 'Successfully resolved package dev dependencies: %s (%d of %d).', pkg, k, len );

		results = transform( results );
		pkgs[ i ].files = pkgs[ i ].files.concat( results.files );

		// Only include as dev dependencies dependencies which are not already listed as deps:
		pkgs[ i ].devDeps = setDifference( results.deps, pkgs[ i ].deps );
	}
	debug( 'Resolved all packages.' );
	return pkgs;
} // end FUNCTION resolve()


// EXPORTS //

module.exports = resolve;
