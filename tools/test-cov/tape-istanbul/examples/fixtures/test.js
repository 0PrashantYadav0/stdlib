'use strict';

// MODULES //

var tape = require( 'tape' );
var foo = require( './foo.instrumented.js' );


// TESTS //

tape( 'the main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof foo, 'function', 'export is a function' );
	t.end();
});

tape( 'the function does not throw an error', function test( t ) {
	var i;
	for ( i = 0; i < 1e3; i++ ) {
		foo();
		t.ok( true, 'did not throw' );
	}
	t.end();
});

