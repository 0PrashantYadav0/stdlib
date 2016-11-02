# Plotting

> This exercise covers plotting in JavaScript using the [stdlib][stdlib] plot API.


## Exercises

### 1) Plot Instances

* Create a [`plot`][plot] instance.
* Try setting various properties with what you consider expected and unexpected values.


### 2) Plot Types

For each exercise, generate both a `browser` view and a `window` view.

* Create a [`plot`][plot] instance configured to plot a single line.
* Create a [`plot`][plot] instance configured to generate a scatter plot.
* Create a [`plot`][plot] instance configured to plot multiple lines. Experiment with different line styles, colors, and other properties.
* Create a [`plot`][plot] instance configured to plot data as a line plot combined with a scatter plot.
* Create a scatter [`plot`][plot] with axes rug plots.


### 3) Multiple Plots

* Generate multiple plots and display them as a single web page in your browser.


## Tips

* For [`plot`][plot] documentation, see the [docs][plot].
* To display multiple plots, see the [disposable HTTP server][disposable-http-server] module and [vdom-to-html][vdom-to-html].


## Testing

Assuming that each solution is placed in a separate file,

``` bash
$ node ./path/to/<solution_1>.js
$ node ./path/to/<solution_2>.js
# ...
```

When all your solutions succeed, proceed to the [next exercise][next-exercise].


<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib
[plot]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/plot/plot
[disposable-http-server]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/tools/disposable-http-server
[vdom-to-html]: https://github.com/nthtran/vdom-to-html

[next-exercise]: https://github.com/stdlib-js/stdlib/blob/develop/workshops/numeric-computing/exercises

<!-- </links> -->
