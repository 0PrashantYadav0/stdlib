'use strict';

// MODULES //

var debug = require( 'debug' )( 'import-require-glob:sync' );
var resolve = require( 'path' ).resolve;
var glob = require( 'glob' ).sync;
var prefix = require( './stdlib.js' );
var copy = require( prefix+'@stdlib/utils/copy' );
var readFileList = require( prefix+'@stdlib/fs/read-file-list' ).sync;
var cwd = require( prefix+'@stdlib/utils/cwd' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var analyze = require( './analyze.js' );


// LS //

/**
* Synchronously generates a list import and require paths.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for files
* @param {string} [options.pattern='**\/*.js'] - file glob pattern
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {(ObjectArray|EmptyArray)} results
*
* @example
* var results = ls( onList );
*
* if ( results instanceof Error ) {
*     throw results;
* }
* console.dir( results );
*/
function ls( options ) {
	var gopts;
	var fopts;
	var names;
	var files;
	var opts;
	var dir;
	var err;

	opts = copy( defaults );
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	debug( 'Options: %s', JSON.stringify( opts ) );
	if ( opts.dir ) {
		dir = resolve( cwd(), opts.dir );
	} else {
		dir = cwd();
	}
	gopts = {
		'cwd': dir,
		'realpath': true // return absolute file paths
	};
	debug( 'Glob options: %s', JSON.stringify( gopts ) );

	debug( 'Searching for matching files...' );
	names = glob( opts.pattern, gopts );
	if ( names.length === 0 ) {
		debug( 'Found 0 matching files.' );
		return [];
	}
	debug( 'Found %d matching files: %s', names.length, names.join( ',' ) );

	debug( 'Reading file contents...' );
	fopts = {
		'encoding': 'utf8'
	};
	files = readFileList( names, fopts );
	if ( files instanceof Error ) {
		debug( 'Encountered an error when reading file contents: %s', files.message );
		throw files;
	}
	debug( 'Finished reading file contents.' );

	debug( 'Analyzing file ASTs...' );
	files = analyze( files );
	debug( 'Finished analysis.' );

	return files;
} // end FUNCTION ls()


// EXPORTS //

module.exports = ls;
