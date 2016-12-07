# Package Tree

> Generate a stdlib package tree.


<section class="usage">

## Usage

``` javascript
var pkgTree = require( '@stdlib/tools/pkgs/tree' );
```

#### pkgTree( \[options,\] clbk )

Asynchronously generates a package tree.

``` javascript
pkgTree( onTree );

function onTree( error, tree ) {
    if ( error ) {
        throw error;
    }
    console.dir( tree );
}
```

The function accepts the following `options`:

* __dir__: root directory from which to search for packages. May be either an absolute file path or a path relative to the `stdlib/lib/node_modules/` directory. Default: `/path/to/stdlib/lib/node_modules/`.

To search from a descendant directory, set the `dir` option.

``` javascript
var opts = {
    'dir': './@stdlib/math/base'
};

pkgTree( opts, onTree );

function onTree( error, tree ) {
    if ( error ) {
        throw error;
    }
    console.dir( tree );
}
```


#### pkgTree.sync( \[options\] )

Synchronously generates a package tree.

``` javascript
var tree = pkgTree.sync();
// returns {...}
```

The function accepts the same `options` as `pkgTree()` above.

</section>

<!-- /.usage -->


<section class="notes">

## Notes

* The function only returns packages under the `@stdlib` scope.

</section>

<!-- /.notes -->


<section class="examples">

## Examples

``` javascript
var pkgTree = require( '@stdlib/tools/pkgs/tree' );

pkgTree( onTree );

function onTree( error, tree ) {
    if ( error ) {
        throw error;
    }
    console.dir( tree );
}
```

</section>

<!-- /.examples -->


---

<section class="cli">

## CLI

<section class="usage">

### Usage

``` bash
Usage: stdlib-pkg-tree [options] [dir]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

* If not provided a `dir` argument, the search directory is the current working directory.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

``` bash
$ stdlib-pkg-tree
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

</section>

<!-- /.links -->
