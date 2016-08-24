'use strict';

/*
* WARNING: this is based on the internal [`module`][1] file within Node.js. The implementation uses private methods exposed on the `Module` object. Given that they are private, breakage is possible.
*
* [1]: https://github.com/nodejs/node/blob/ebc8c37f70a84a64851b440493f3441eb9f70fdb/lib/internal/module.js
* [2]: https://github.com/nodejs/node/blob/f6070a1a02d946b0caad7ee8bee3c2d583ebad4b/lib/internal/bootstrap_node.js
*/

// MODULES //

var Module = require( 'module' );
var prefix = require( './stdlib.js' );
var dirname = require( prefix+'@stdlib/utils/dirname' );


// VARIABLES //

var nodeModulePaths = Module._nodeModulePaths;
var resolveFilename = Module._resolveFilename;
var extensions = Module._extensions;
var cache = Module._cache;
var main = process.mainModule;


// REQUIRE //

/**
* Returns a `require` function.
*
* @private
* @param {string} id - module id (filepath)
* @returns {Function} require function
*/
function createRequire( id ) {
	var module = new Module( id );

	// Module filename:
	module.filename = id;

	// Module `node_modules` paths:
	module.paths = nodeModulePaths( dirname( id ) );

	/**
	* Attempts to load a module.
	*
	* @private
	* @param {string} path - module id
	*/
	function require( path ) {
		try {
			return module.require( path );
		} finally {}
	} // end FUNCTION require()

	/**
	* Attempts to resolve a module.
	*
	* @private
	* @param {string} name - module
	* @returns {string} module filepath
	*/
	require.resolve = function resolve( name ) {
		return resolveFilename( name, module, false );
	}; // end FUNCTION resolve()

	// Application entry point:
	require.main = main;

	// Support for extra extension types:
	require.extensions = extensions;

	// Use the existing module cache:
	require.cache = cache;

	return require;
} // end FUNCTION createRequire()


// EXPORTS //

module.exports = createRequire;
