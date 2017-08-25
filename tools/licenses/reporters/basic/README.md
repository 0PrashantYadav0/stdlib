# Reporter

> Basic license information reporter.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var reporter = require( '@stdlib/tools/licenses/reporters/basic' );
```

#### reporter( results )

Returns (unfiltered) license results.

```javascript
var licenses = require( '@stdlib/tools/licenses/licenses' );

licenses( onResults );

function onResults( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( reporter( results ) );
}
```

</section>

<!-- /.usage -->

<section class="examples">

<!-- ## Examples

``` javascript

``` -->

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```bash
Usage: licenses-reporter [options]

Options:

  -h,    --help                      Print this message.
  -V,    --version                   Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Use as part of a standard stream pipeline.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ licenses | licenses-reporter
```

Example output:

```text
Package licenses:

path-platform@0.0.1
└── license: UNKNOWN

optimist@0.5.2
├── package.json: MIT/X11
└── license: MIT

resolve@0.4.3
├── package.json: MIT
├── license: MIT
└── readme: MIT

shell-quote@1.3.3
├── package.json: MIT
└── readme: MIT
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

</section>

<!-- /.links -->
