'use strict';

// MODULES //

var remarkUnlink = require( 'remark-unlink' );
var remark = require( 'remark' );
var lunr = require( 'lunr' );
var removeElements = require( './remove_elements.js' );
var tokenizer = require( './tokenizer.js' );
var extractor = require( './extractor.js' );


// CONFIG //

lunr.tokenizer.registerFunction( tokenizer, 'readme_tokenizer' );
lunr.tokenizer.load( 'readme_tokenizer' );


// VARIABLES //

var processer = {
	'intro': remark()
		.use( extractor( 'intro' ) )
		.use( remarkUnlink )
		.use( removeElements )
		.process,
	'notes': remark()
		.use( extractor( 'notes' ) )
		.use( remarkUnlink )
		.use( removeElements )
		.process,
	'usage': remark()
		.use( extractor( 'usage' ) )
		.use( remarkUnlink )
		.use( removeElements )
		.process,
	'cli': remark()
		.use( extractor( 'cli' ) )
		.use( remarkUnlink )
		.use( removeElements )
		.process,
	'references': remark()
		.use( extractor( 'references' ) )
		.use( remarkUnlink )
		.use( removeElements )
		.process,
};


// FUNCTIONS //

/**
* Extracts and cleans up text related to a given section.
*
* @private
* @param {string} readme - full readme text
* @param {string} section - section name
* @returns {string} processed text
*/
function getSectionText( readme, section ) {
	var out = processer[ section ]( readme );
	return out.contents;
} // end FUNCTION getSectionText()


// MAIN //

/**
* Indexes a document using lunr.
*
* @private
* @param {Object} file - input file
* @returns {Object} serialized lunr object
*/
function createIndex( file ) {
	var references;
	var notes;
	var intro;
	var usage;
	var cli;
	var doc;
	var idx;

	intro = getSectionText( file.data, 'intro' );
	notes = getSectionText( file.data, 'notes' );
	usage = getSectionText( file.data, 'usage' );
	cli = getSectionText( file.data, 'cli' );
	references = getSectionText( file.data, 'references' );

	doc = {
		'title': file.data.match( /^#[ ]*([^\n]+)\r?\n/ )[ 1 ],
		'description': file.data.match( />[ ]*([^\n]+)\r?\n/ )[ 1 ],
		'intro': intro,
		'usage': usage,
		'notes': notes,
		'cli': cli,
		'references': references,
		'id': file.file
	};
	idx = lunr( function initialize() {
		this.field( 'title', { 'boost': 10 });
		this.field( 'description', { 'boost': 5 });
		this.field( 'intro', { 'boost': 3 } );
		this.field( 'usage', { 'boost': 3 } );
		this.field( 'notes', { 'boost': 2 } );
		this.field( 'cli', { 'boost': 1 } );
		this.field( 'references', { 'boost': 1 } );
		this.ref( 'id' );
	});
	idx.tokenizer( lunr.tokenizer.registeredFunctions.readme_tokenizer );
	idx.add( doc );
	return idx.toJSON();
} // end FUNCTION createIndex()


// EXPORTS //

module.exports = createIndex;
