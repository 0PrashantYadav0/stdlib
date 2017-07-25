'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var isURI = require( '@stdlib/assert/is-uri' );
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var cwd = require( '@stdlib/utils/cwd' );
var config = require( './defaults.js' );
var validate = require( './validate.js' );


// MAIN //

/**
* Synchronously returns the id corresponding to a provided URI.
*
* @param {string} uri - URI
* @param {Options} [options] - options
* @param {string} [options.database] - path to a link database file (JSON)
* @throws {TypeError} must provide a URI
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {(Error|string|null)} result
*
* @example
* var id = uri2id( 'http://www.bibtex.org/' );
* // returns 'bibtex'
*/
function uri2id( uri, options ) {
	var fopts;
	var opts;
	var err;
	var db;
	if ( !isURI( uri ) ) {
		throw new TypeError( 'invalid input argument. Must provide a URI. Value: `'+uri+'`.' );
	}
	opts = {
		'database': config.database
	};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	opts.database = resolve( cwd(), opts.database );
	fopts = {
		'encoding': 'utf8'
	};
	db = readJSON( opts.database, fopts );
	if ( instanceOf( db, Error ) ) {
		return db;
	}
	if ( hasOwnProp( db, uri ) ) {
		return db[ uri ].id;
	}
	return null;
} // end FUNCTION uri2id()


// EXPORTS //

module.exports = uri2id;
