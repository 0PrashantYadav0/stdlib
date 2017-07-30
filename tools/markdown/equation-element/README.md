# Equation Element

> Generate an HTML string for displaying an SVG equation in a GitHub Markdown file.


<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

``` javascript
var createElement = require( '@stdlib/tools/markdown/equation-element' );
```

#### createElement( \[options\] )

Generates an HTML `string` for displaying an SVG equation in a GitHub Markdown file.

``` javascript
var html = createElement();
// returns '<div class="equation" align="center" data-raw-text="" data-equation="">\n    <img src="" alt="">\n    <br>\n</div>'
```

The function accepts the following `options`:

* __className__: element class name. Default: `'equation'`.
* __align__: element alignment. Default: `'center'`.
* __raw__: raw equation text.
* __label__: equation label.
* __src__: image source URL.
* __alt__: alternative image text.

Each `option` corresponds an HTML attribute. For example, to set the image source URL, set the `src` option.

``` javascript
var opts = {
    'src': 'https://cdn.rawgit.com/stdlib-js/stdlib/master/docs/img/eqn1.svg'
};

var html = createElement( opts );
// returns '<div class="equation" align="center" data-raw-text="" data-equation="">\n    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/master/docs/img/eqn1.svg" alt="">\n    <br>\n</div>'
```

To include a raw equation [TeX][tex] or [LaTeX][latex] `string` in the element, set the `raw` option.

``` javascript
var opts = {
    'raw': '\\Gamma ( n ) = (n-1)!',
    'src': 'https://cdn.rawgit.com/stdlib-js/stdlib/master/docs/img/eqn1.svg'
};

var html = createElement( opts );
// returns '<div class="equation" align="center" data-raw-text="\Gamma ( n ) = (n-1)!" data-equation="">\n    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/master/docs/img/eqn1.svg" alt="">\n    <br>\n</div>'
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
var createElement = require( '@stdlib/tools/markdown/equation-element' );

var opts = {
    'className': 'eqn',
    'align': 'left',
    'raw': '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt',
    'label': 'eq:erf',
    'src': 'https://cdn.rawgit.com/stdlib-js/stdlib/master/docs/img/eqn.svg',
    'alt': 'Error function.'
};

var html = createElement( opts );

console.log( html );
// => '<div class="eqn" align="left" data-raw-text="\operatorname{erf}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,\mathrm dt" data-equation="eq:erf">\n    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/master/docs/img/eqn.svg" alt="Error function.">\n    <br>\n</div>'
```

</section>

<!-- /.examples -->


---

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

``` bash
Usage: gheqn [options]

Options:

  -h,  --help               Print this message.
  -V,  --version            Print the package version.
       --class name         Element class name. Default: equation.
       --align alignment    Element alignment. Default: center.
       --raw text           Raw equation text.
       --label label        Equation label.
       --src url            Image source URL.
       --alt text           Alternative image text.
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
$ gheqn --raw '\Gamma ( n ) = (n-1)!' --src 'https://cdn.rawgit.com/stdlib-js/stdlib/master/docs/img/eqn1.svg'
<div class="equation" align="center" data-raw-text="\Gamma ( n ) = (n-1)!" data-equation="">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/master/docs/img/eqn1.svg" alt="">
    <br>
</div>
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

[tex]: https://en.wikipedia.org/wiki/TeX
[latex]: https://en.wikipedia.org/wiki/LaTeX

</section>

<!-- /.links -->
