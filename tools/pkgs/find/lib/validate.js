'use strict';

// MODULES //

var isObject = require( '@stdlib/utils/is-plain-object' );
var hasOwnProp = require( '@stdlib/utils/has-own-property' );
var isString = require( '@stdlib/utils/is-string' ).isPrimitive;
var isStringArray = require( '@stdlib/utils/is-string' ).isPrimitiveStringArray;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.dir] - root directory from which to search for packages
* @param {string} [options.pattern] - glob pattern
* @param {StringArray} [options.ignore] - glob pattern(s) to exclude matches
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'dir': '/foo/bar/baz'
* };
*
* var err = validate( opts, options );
* if ( err ) {
*    throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options +
			'`.' );
	}
	if ( hasOwnProp( options, 'dir' ) ) {
		opts.dir = options.dir;
		if ( !isString( opts.dir ) ) {
			return new TypeError( 'invalid option. `dir` option must be a primitive string. Option: `' + opts.dir + '`.' );
		}
	}
	if ( hasOwnProp( options, 'pattern' ) ) {
		opts.pattern = options.pattern;
		if ( !isString( opts.pattern ) ) {
			return new TypeError( 'invalid option. `pattern` option must be a primitive string. Option: `' + opts.pattern + '`.' );
		}
	}
	if ( hasOwnProp( options, 'ignore' ) ) {
		opts.ignore = options.ignore;
		if ( !isStringArray( opts.ignore ) ) {
			return new TypeError( 'invalid option. `ignore` option must be a string array. Option: `' + opts.ignore + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
