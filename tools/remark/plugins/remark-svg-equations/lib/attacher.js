'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-svg-equations:attacher' );
var copy = require( '@stdlib/utils/copy' );
var isObject = require( '@stdlib/utils/is-plain-object' );
var hasOwnProp = require( '@stdlib/utils/has-own-property' );
var isString = require( '@stdlib/utils/is-string' ).isPrimitive;
var transformerFactory = require( './transformer.js' );
var defaults = require( './defaults.json' );


// MAIN //

/**
* Attach a plugin to a remark processor in order to create SVGs for HTML equation elements.
*
* @param {Remark} remark - remark instance
* @param {Options} [options] - options object
* @param {string} [options.dir="./docs/img/"] - resource directory
* @return {Function} transformer
*/
function attacher( remark, options ) {
	var opts = copy( defaults );

	// NOTE: cannot use `arguments.length` check, as `options` may be explicitly passed as `undefined`
	if ( options !== void 0 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		if ( hasOwnProp( options, 'dir' ) ) {
			if ( !isString( options.dir ) ) {
				throw new TypeError( 'invalid option. `dir` option must be a string primitive. Value: `' + options.dir + '`.' );
			}
			opts.dir = options.dir;
		}
	}
	debug( 'Attaching a plugin configured with the following options: %s', JSON.stringify( opts ) );
	return transformerFactory( opts );
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
