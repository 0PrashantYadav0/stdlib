'use strict';

/**
* Tests if an AST node is a `require` statement.
*
* @private
* @param {Node} node - AST node
* @returns {boolean} boolean indicating if node is a `require` statement
*/
function isRequire( node ) {
	return (
		node.callee.type === 'Identifier' &&
		node.callee.name === 'require'
	);
} // end FUNCTION isRequire()


// EXPORTS //

module.exports = isRequire;
