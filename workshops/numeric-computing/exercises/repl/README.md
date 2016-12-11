# REPL

> This exercise covers using a REPL for numeric computing.


## Exercises

### 1) Getting Started

* Launch a REPL from the top-level `stdlib` directory.

  ``` bash
  $ cd ./path/to/stdlib-js/stdlib
  $ make repl
  ```

* To see a list of REPL functions, hit the `TAB` key.

* Create a linearly spaced `1001` element vector from `0` to `1` using [linspace][linspace].

* To retrieve the last value, type `_` and hit `ENTER`.


### 2) Plotting

* Generate a plot of [`erf`][erf] over the interval `[-10,10]`.
* Generate a column chart [sparkline][sparkline]. Note that `ColumnChart` is aliased as `Sparkline` in the REPL.
* Simulate `10000` pseudorandom [uniform][randu] numbers, bin the numbers into `101` __equally__ spaced (see [linspace][linspace]) bins from `0` to `1`, and generate a sparkline showing the bin counts.


### 3) Scripts

* Require one of your previous solutions; e.g., 

  ``` text
  > require( './workshops/numeric-computing/solutions/native_math.5.js' );
  ```

## Tips

* When generating a sparkline for `randu` counts, be sure to set `yMin`. If not set, counts will appear less uniform than they actually are.

When you have completed all exercises, proceed to the [next exercise][next-exercise].


<section class="links">

[linspace]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/generics/utils/linspace
[erf]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/erf
[sparkline]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/plot/sparklines/unicode/column
[randu]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/random/randu

[next-exercise]: https://github.com/stdlib-js/stdlib/blob/develop/workshops/numeric-computing/exercises

</section>

<!-- /.links -->
