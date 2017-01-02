'use strict';

// MODULES //

var copy = require( '@stdlib/utils/copy' );
var defaults = require( './.eslintrc.js' );


// MAIN //

/**
* ESLint configuration.
*
* @namespace eslint
*/
var eslint = copy( defaults );

/**
* Allow empty functions.
*
* @private
*/
eslint.rules[ 'no-empty-function' ] = 'off';

/**
* Warn when using `String`, `Number`, and `Boolean` in place of primitives.
*
* @private
*/
eslint.rules[ 'no-new-wrappers' ] = 'warn';

/**
* Override the limit for source code lines in a file.
*
* @private
*/
eslint.rules[ 'max-lines' ] = [ 'warn', {
	'max': 1000,
	'skipBlankLines': true,
	'skipComments': true
}];

/**
* Override list of restricted syntax.
*
* @private
*/
eslint.rules[ 'no-restricted-syntax' ] = [ 'error',
	'ArrowFunctionExpression',
	'ClassBody',
	'ClassDeclaration',
	'ClassExpression',
	'DebuggerStatement',
	'ExperimentalRestProperty',
	'ExperimentalSpreadProperty',
	// 'FunctionExpression',
	'LabeledStatement',
	'RestElement',
	'SpreadElement',
	'TaggedTemplateExpression',
	'TemplateElement',
	'TemplateLiteral',
	'WithStatement',
	'YieldExpression',
	'JSXIdentifier',
	'JSXNamespacedName',
	'JSXMemberExpression',
	'JSXEmptyExpression',
	'JSXExpressionContainer',
	'JSXElement',
	'JSXClosingElement',
	'JSXOpeningElement',
	'JSXAttribute',
	'JSXSpreadAttribute',
	'JSXText',
	'ExportDefaultDeclaration',
	'ExportNamedDeclaration',
	'ExportAllDeclaration',
	'ExportSpecifier',
	'ImportDeclaration',
	'ImportSpecifier',
	'ImportDefaultSpecifier',
	'ImportNamespaceSpecifier'
];

/**
* Allow one property objects to be expressed on the same line.
*
* @private
* @example
* // Okay...
* var obj = { 'foo': 'bar' };
*/
eslint.rules[ 'object-curly-newline' ] = [ 'error', {
	'ObjectExpression': {
		'minProperties': 2
	},
	'ObjectPattern': 'never'
}];

/**
* Do not require JSDoc comments.
*
* @private
*/
eslint.rules[ 'require-jsdoc' ] = 'off';

/**
* Allow the use of `undefined`.
*
* @private
*/
eslint.rules[ 'no-undefined' ] = 'off';


// EXPORTS //

module.exports = eslint;
