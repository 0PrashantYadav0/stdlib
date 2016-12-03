# Namespaces

> List stdlib namespaces.


<section class="usage">

## Usage

``` javascript
var ls = require( '/path/to/stdlib/tools/pkgs/namespaces' );
```

#### ls( \[options,\] clbk )

Asynchronously returns a list of stdlib namespaces.

``` javascript
ls( onList );

function onList( error, names ) {
    if ( error ) {
        throw error;
    }
    console.log( names.join( '\n' ) );
}
```

The function accepts the following `options`:

* __dir__: root directory from which to search for namespaces. May be either an absolute file path or a path relative to the `stdlib/lib/node_modules/` directory. Default: `/path/to/stdlib/lib/node_modules/`.

To search from a descendant directory, set the `dir` option.

``` javascript
var opts = {
    'dir': './@stdlib/math/base'
};

ls( opts, onList );

function onList( error, names ) {
    if ( error ) {
        throw error;
    }
    console.log( names.join( '\n' ) );
}
```


#### ls.sync( \[options\] )

Synchronously returns a list of stdlib namespaces.

``` javascript
var names = ls.sync();
// returns [...]
```

The function accepts the same `options` as `ls()` above.

</section>

<!-- /.usage -->


<section class="notes">

## Notes

* The function only returns namespaces under the `@stdlib` scope.

</section>

<!-- /.notes -->


<section class="examples">

## Examples

``` javascript
var ls = require( '/path/to/stdlib/tools/pkgs/namespaces' );

ls( onList );

function onList( error, names ) {
    if ( error ) {
        throw error;
    }
    console.log( names.join( '\n' ) );
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
Usage: stdlib-namespaces [options] [dir]

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
$ stdlib-namespaces
<package_name>
<package_name>
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

</section>

<!-- /.links -->
