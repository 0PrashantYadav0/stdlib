# Bundle

> Bundle benchmark files into a single file using [browserify][browserify].


<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

``` javascript
var bundle = require( '@stdlib/tools/gh-pages/benchmarks-bundle' );
```

#### bundle( root, \[options,\] clbk )

Given a `root` root directory from which to search for benchmarks, bundle benchmarks into a single file using [browserify][browserify].

``` javascript
var cwd = require( '@stdlib/utils/cwd' );

bundle( cwd(), clbk );

function clbk( error, bundle ) {
    if ( error ) {
        throw error;
    }
    console.log( bundle.toString() );
}
```

The function accepts the following `options`:

* __out__: output file path.
* __pattern__: glob pattern. Default: `'**/benchmark*.js'`.

To specify an output file path, set the `out` option.

``` javascript
var cwd = require( '@stdlib/utils/cwd' );

var opts = {
    'out': '/foo/bar/bundle.js'
};

bundle( cwd(), opts, clbk );

function clbk( error ) {
    if ( error ) {
        throw error;
    }
}
```

To provide an alternative glob pattern, set the `pattern` option.

``` javascript
var cwd = require( '@stdlib/utils/cwd' );

var opts = {
    'pattern': '**/bench.js'
};

bundle( cwd(), opts, clbk );

function clbk( error, bundle ) {
    if ( error ) {
        throw error;
    }
    console.log( bundle.toString() );
}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

``` javascript
var join = require( 'path' ).join;
var bundle = require( '@stdlib/tools/gh-pages/benchmarks-bundle' );

var root = join( __dirname, 'fixtures' );

var opts = {
    'pattern': '*.js'
};

bundle( root, opts, onBundle );

function onBundle( error, bundle ) {
    if ( error ) {
        throw error;
    }
    console.log( bundle.toString() );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

---

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

``` bash
Usage: benchmarks-bundle [options] [dir]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --pattern glob        Glob pattern.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

``` bash
$ benchmarks-bundle --pattern 'index.js' ./examples/fixtures
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[browserify]: https://github.com/substack/node-browserify

</section>

<!-- /.links -->
