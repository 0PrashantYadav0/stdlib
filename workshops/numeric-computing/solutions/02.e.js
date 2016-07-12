'use strict';

var toHTML = require( 'vdom-to-html' );
var getKeys = require( 'object-keys' ).shim();
var Plot = require( '@stdlib/plot/plot' );
var epsdiff = require( '@stdlib/math/base/utils/float64-epsilon-difference' );
var httpServer = require( '@stdlib/tools/disposable-http-server' );
var rmse = require( './02.b.js' );

var FCNS = {
	'sqrt': require( '@stdlib/math/base/special/sqrt' ),
	'pow': require( '@stdlib/math/base/special/pow' ),
	'exp': require( '@stdlib/math/base/special/exp' ),
	'sin': require( '@stdlib/math/base/special/sin' ),
	'cos': require( '@stdlib/math/base/special/cos' ),
	'tan': require( '@stdlib/math/base/special/tan' ),
	'log': require( '@stdlib/math/base/special/ln' ),
	'acos': require( '@stdlib/math/base/special/acos' ),
	'asin': require( '@stdlib/math/base/special/asin' ),
	'atan': require( '@stdlib/math/base/special/atan' )
};

/**
* Compute the deviations between a JavaScript implementation and a standard and returns a rendered plot.
*
* @private
* @param {string} method - method name
* @param {...NumericArray} args - method arguments
* @param {NumericArray} expected - expected results
* @returns {string} rendered plot
*/
function deviations( method ) {
	var expected;
	var delta;
	var plot;
	var opts;
	var args;
	var tmp;
	var f;
	var y;
	var i;
	var j;

	// Parse input arguments...
	expected = arguments[ arguments.length-1 ];
	args = new Array( arguments.length-2 );
	for ( i = 0; i < args.length; i++ ) {
		args[ i ] = arguments[ i+1 ];
	}

	// Compute results when using the JavaScript implementation...
	y = new Float64Array( expected.length );
	tmp = new Array( args.length );
	for ( i = 0; i < y.length; i++ ) {
		f = FCNS[ method ];
		for ( j = 0; j < args.length; j++ ) {
			tmp[ j ] = args[ j ][ i ];
		}
		y[ i ] = f.apply( null, tmp );
	}

	// Compute the epsilon difference between each result and the standard value...
	delta = new Float64Array( y.length );
	for ( i = 0; i < y.length; i++ ) {
		delta[ i ] = epsdiff( expected[i], y[i], 'x' );
	}

	// Generate a rendered plot...
	opts = {
		'title': method+': RMSE='+rmse( expected, y ),
		'xLabel': 'x',
		'yLabel': 'delta (eps)'
	};
	plot = new Plot( [args[0]], [delta], opts );
	return toHTML( plot.render() );
} // end FUNCTION deviations()

/**
* Loads fixture data and returns a plot of deviations.
*
* @private
* @param {string} method - native method name
* @returns {string} rendered plot
*/
function compute( method ) {
	var expected;
	var data;
	var keys;
	var args;
	var i;

	data = require( './../fixtures/'+method+'/data.json' );
	keys = getKeys( data );
	args = [ method ];
	for ( i = 0; i < keys.length; i++ ) {
		if ( keys[i] === 'expected' ) {
			expected = data[ keys[i] ];
		} else {
			args.push( data[ keys[i] ] );
		}
	}
	args.push( expected );
	return deviations.apply( null, args );
} // end FUNCTION compute()

/**
* Shows the plots in a local web browser.
*
* @private
* @param {string} html - HTML to view
*/
function show( html ) {
	var opts = {
		'html': html,
		'open': true
	};
	httpServer( opts );
} // end FUNCTION show()

/**
* Runs the analysis.
*
* @private
*/
function main() {
	var fcns;
	var out;
	var i;
	fcns = getKeys( FCNS );
	out = '';
	for ( i = 0; i < fcns.length; i++ ) {
		out += compute( fcns[i] );
	}
	show( out );
} // end FUNCTION main()

main();
