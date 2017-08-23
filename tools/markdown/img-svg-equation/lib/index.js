'use strict';

/**
* Generate an HTML string for displaying an SVG equation as an image in a GitHub Markdown file.
*
* @module @stdlib/tools/markdown/img-svg-equation
*
* @example
* var createElement = require( '@stdlib/tools/markdown/img-svg-equation' );
*
* var opts = {
*     'className': 'equation',
*     'align': 'center',
*     'raw': '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt'
*     'label': 'eqn:erf',
*     'src': 'https://cdn.rawgit.com/stdlib-js/stdlib/master/lib/node_modules/@stdlib/math/base/special/erf/docs/img/eqn.svg'
*     'alt': 'Error function.'
* };
* var html = createElement( opts );
* // returns <string>
*/

// MODULES //

var createElement = require( './main.js' );


// EXPORTS //

module.exports = createElement;
