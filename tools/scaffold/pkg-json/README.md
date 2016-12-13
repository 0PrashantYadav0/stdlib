# package.json

> Create a `package.json`.


<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

``` javascript
var create = require( '@stdlib/tools/scaffold/pkg-json' );
```

#### create( \[options\] )

Returns a `package.json`.

``` javascript
var pkg = create();
// returns <Object>
```

The function accepts the following `options`:

* __name__: package [name][package-name]. Package names should be scoped to the `@stdlib` namespace; e.g., `@stdlib/...`.
* __desc__: package [description][package-description].
* __keywords__: package [keywords][package-keywords]. The keyword `stdlib` is automatically included in the keyword list and thus does not need to be included.
* __cmd__: package [command][package-command] for use as a CLI tool.
* __bin__: path to package executable. Only used if provided `options.cmd`. Default: `./bin/cli`.

To return a valid `package.json`, set the `name`, `desc`, and `keywords` options.

``` javascript
var opts = {
    'name': '@stdlib/math/base/special/erf',
    'desc': 'Error function',
    'keywords': [
        'math',
        'mathematics',
        'error',
        'function',
        'erf'
    ]
};

var pkg = create( opts );
/* returns
    {
      "name": "@stdlib/math/base/special/erf",
      "version": "0.0.0",
      "description": "Error function.",
      "author": {
        "name": "The Stdlib Authors",
        "url": "https://github.com/stdlib-js/stdlib/graphs/contributors"
      },
      "contributors": [
        {
          "name": "The Stdlib Authors",
          "url": "https://github.com/stdlib-js/stdlib/graphs/contributors"
        }
      ],
      "scripts": {},
      "main": "./lib",
      "repository": {
        "type": "git",
        "url": "git://github.com/stdlib-js/stdlib.git"
      },
      "homepage": "https://github.com/stdlib-js/stdlib",
      "keywords": [
        "stdlib",
        "math",
        "mathematics",
        "error",
        "function",
        "erf"
      ],
      "bugs": {
        "url": "https://github.com/stdlib-js/stdlib/issues"
      },
      "dependencies": {},
      "devDependencies": {},
      "engines": {
        "node": ">=0.10.0"
      },
      "license": "Apache-2.0"
    }
*/
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
var create = require( '@stdlib/tools/scaffold/pkg-json' );

var opts = {
    'name': '@stdlib/math/base/special/erf',
    'desc': 'Error function.',
    'keywords': [
        'math',
        'mathematics',
        'error',
        'function',
        'erf'
    ],
    'cmd': 'erf',
    'bin': './bin/cli'
};

var pkg = create( opts );
console.dir( pkg );
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
Usage: package-json [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --name name           Package name.
         --desc description    Package description.
         --keywords k1,k2,...  Package keywords.
         --cmd command         Package command for use as a CLI tool.
         --bin path            Path to executable.
         --compact             Disable pretty print.
         --space num           White space amount. Default: 2.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

* Setting `--space 0` is the equivalent of `--compact`.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

``` bash
$ package-json
{
  "name": "{{TODO:name}}",
  "version": "0.0.0",
  "description": "{{TODO:description}}",
  "author": {
    "name": "The Stdlib Authors",
    "url": "https://github.com/stdlib-js/stdlib/graphs/contributors"
  },
  "contributors": [
    {
      "name": "The Stdlib Authors",
      "url": "https://github.com/stdlib-js/stdlib/graphs/contributors"
    }
  ],
  "scripts": {},
  "main": "./lib",
  "repository": {
    "type": "git",
    "url": "git://github.com/stdlib-js/stdlib.git"
  },
  "homepage": "https://github.com/stdlib-js/stdlib",
  "keywords": [
    "stdlib",
    "{{TODO:keywords}}"
  ],
  "bugs": {
    "url": "https://github.com/stdlib-js/stdlib/issues"
  },
  "dependencies": {},
  "devDependencies": {},
  "engines": {
    "node": ">=0.10.0"
  },
  "license": "Apache-2.0"
}
```

To create a valid `package.json`, set the `name`, `desc`, and `keywords` options.

``` bash
$ package-json --name @stdlib/math/base/special/erf --desc 'Error function.' --keywords 'math,mathematics,error,function,erf'
{
  "name": "@stdlib/math/base/special/erf",
  "version": "0.0.0",
  "description": "Error function.",
  "author": {
    "name": "The Stdlib Authors",
    "url": "https://github.com/stdlib-js/stdlib/graphs/contributors"
  },
  "contributors": [
    {
      "name": "The Stdlib Authors",
      "url": "https://github.com/stdlib-js/stdlib/graphs/contributors"
    }
  ],
  "scripts": {},
  "main": "./lib",
  "repository": {
    "type": "git",
    "url": "git://github.com/stdlib-js/stdlib.git"
  },
  "homepage": "https://github.com/stdlib-js/stdlib",
  "keywords": [
    "stdlib",
    "math",
    "mathematics",
    "error",
    "function",
    "erf"
  ],
  "bugs": {
    "url": "https://github.com/stdlib-js/stdlib/issues"
  },
  "dependencies": {},
  "devDependencies": {},
  "engines": {
    "node": ">=0.10.0"
  },
  "license": "Apache-2.0"
}
```

To disable pretty printing, set the `compact` option.

``` bash
$ package-json --compact
{"name":"{{TODO:name}}","version":"0.0.0","description":"{{TODO:description}}","author":{"name":"The Stdlib Authors","url":"https://github.com/stdlib-js/stdlib/graphs/contributors"},"contributors":[{"name":"The Stdlib Authors","url":"https://github.com/stdlib-js/stdlib/graphs/contributors"}],"scripts":{},"main":"./lib","repository":{"type":"git","url":"git://github.com/stdlib-js/stdlib.git"},"homepage":"https://github.com/stdlib-js/stdlib","keywords":["stdlib","{{TODO:keywords}}"],"bugs":{"url":"https://github.com/stdlib-js/stdlib/issues"},"dependencies":{},"devDependencies":{},"engines":{"node":">=0.10.0"},"license":"Apache-2.0"}
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

[package-name]: https://docs.npmjs.com/files/package.json#name
[package-description]: https://docs.npmjs.com/files/package.json#description
[package-keywords]: https://docs.npmjs.com/files/package.json#keywords
[package-command]: https://docs.npmjs.com/files/package.json#bin

</section>

<!-- /.links -->
