'use strict';

// MODULES //

var debug = require( 'debug' )( 'entry-points:sync:resolve' );
var join = require( 'path' ).join;
var resolve = require( 'resolve' ).sync;
var prefix = require( './stdlib.js' );
var readJSON = require( prefix+'@stdlib/fs/read-json' ).sync;
var resolveDir = require( './resolve_dir.sync.js' );


// MAIN //

/**
* Resolves a list of packages.
*
* @private
* @param {StringArray} pkgs - list of packages
* @param {string} basedir - base directory from which to resolve packages
* @returns {(ObjectArray|Error)} results or an error
*/
function getPkgs( pkgs, basedir ) {
	var main;
	var opts;
	var data;
	var pkg;
	var len;
	var out;
	var dir;
	var i;
	var k;

	len = pkgs.length;
	debug( 'Resolving %d packages...', len );

	out = new Array( len );
	for ( i = 0; i < len; i++ ) {
		pkg = pkgs[ i ];
		k = i + 1;

		debug( 'Resolving package: %s (%d of %d).', pkg, k, len );
		opts = {
			'basedir': basedir
		};
		out[ i ] = {};
		out[ i ].pkg = pkg;

		main = resolve( pkg, opts );
		out[ i ].id = main;
		debug( 'Resolved package: %s (%d of %d). Main: %s.', pkg, k, len, main );

		debug( 'Resolving package directory for package: %s (%d of %d)...', pkg, k, len );
		dir = resolveDir( main );
		if ( dir instanceof Error ) {
			debug( 'Encountered an error while resolving package directory: %s (%d of %d). Error: %s', pkg, k, len, dir.message );
			return dir;
		}
		out[ i ].dir = dir;
		debug( 'Resolved package directory for package: %s (%d of %d). Dir: %s', pkg, k, len, dir );

		data = readJSON( join( dir, 'package.json' ) );
		if ( data instanceof Error ) {
			debug( 'Encountered an error while reading `package.json`: %s (%d of %d). Error: %s', pkg, k, len, data.message );
			return data;
		}
		out[ i ].data = data;
	}
	debug( 'Resolved all packages.' );
	return out;
} // end FUNCTION getPkgs()


// EXPORTS //

module.exports = getPkgs;
