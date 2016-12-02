'use strict';

// MODULES //

var tape = require( 'tape' );
var transform = require( './../lib/transform.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof transform, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function transforms a list of files into a list of packages', function test( t ) {
	var expected;
	var actual;
	var files;

	files = [
		'/path/to/stdlib/lib/node_modules/@stdlib/beep/package.json',
		'/path/to/stdlib/lib/node_modules/@stdlib/boop/package.json',
		'/path/to/stdlib/lib/node_modules/@stdlib/foo/bar/package.json'
	];

	expected = [
		'/path/to/stdlib/lib/node_modules/@stdlib/beep',
		'/path/to/stdlib/lib/node_modules/@stdlib/boop',
		'/path/to/stdlib/lib/node_modules/@stdlib/foo/bar'
	];

	actual = transform( files );
	t.deepEqual( actual, expected, 'returns expected names' );

	t.end();
});
