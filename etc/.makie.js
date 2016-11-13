'use strict';

// MODULES //

var path = require( 'path' );


// VARIABLES //

var prefix = path.resolve( __dirname, '../tools/makie/plugins' );


// MAIN //

var config = {};
var plugins = {};

config.plugins = plugins;

plugins[ 'repl' ] = path.join( prefix, 'makie-repl' );
plugins[ 'notes' ] = path.join( prefix, 'makie-notes' );
plugins[ 'examples' ] = path.join( prefix, 'makie-examples' );
plugins[ 'test' ] = path.join( prefix, 'makie-test' );
plugins[ 'test-summary' ] = path.join( prefix, 'makie-test-summary' );
plugins[ 'test-cov' ] = path.join( prefix, 'makie-test-cov' );
plugins[ 'view-cov' ] = path.join( prefix, 'makie-view-cov' );
plugins[ 'benchmark' ] = path.join( prefix, 'makie-benchmark' );
plugins[ 'lint-javascript' ] = path.join( prefix, 'makie-lint-javascript' );
plugins[ 'lint-markdown' ] = path.join( prefix, 'makie-lint-markdown' );
plugins[ 'complexity' ] = path.join( prefix, 'makie-complexity' );
plugins[ 'view-complexity' ] = path.join( prefix, 'makie-view-complexity' );
plugins[ 'list-pkgs' ] = path.join( prefix, 'makie-list-pkgs' );
plugins[ 'list-pkgs-names' ] = path.join( prefix, 'makie-list-pkgs-names' );


// EXPORTS //

module.exports = config;
