# Bugs

> Bugs in the native (built-in) `Math` namespace.

* [Sine and cosine in V8][@bug:v8:3006]
* [Trigonometric functions in V8][@bug:chromium:320097]
* [V8 not IEEE 754-2008 compliant][@bug:v8:3089]
* [Mozilla discussion on sine and cosine in V8][@bug:mozilla:967709]
* [V8 replaced a lookup table by computing `Math.tan` as `Math.sin/Math.cos`][@bug:chromium:78263005]
* [Browser math accuracy issues][@bug:kangax:compat-table:392]
* [Mozilla attempt to address precision in new Math functions][@bug:mozilla:933257]
* [Mozilla's previous lack of tolerance tests for Math functions][@bug:mozilla:892671]
* [Mozilla `Math.expm1` accuracy][@bug:mozilla:897634]
* [Mozilla thread on implementing ES6 math functions][@bug:mozilla:717379]
* [V8 `Math.atanh` issues][@bug:v8:3511]
* [V8 `Math.acosh` issues][@bug:v8:3509]
* [V8 `Math.asinh` issues][@bug:v8:3496]
* [V8 numeric issues in hyperbolic functions][@bug:v8:3266]
* [ES6 accuracy of special functions][@bug:esdiscuss:038525]
* [Accuracy of `Math.exp` in V8][@bug:v8:3468]
* [TC39 meeting discussing Math accuracy issues][@bug:esdiscuss:2014-07-31]
* [Spreadsheet showing trigonometric results across browsers][@bug:esdiscuss:038525:spreadsheet]
* [Accuracy of `Math.pow` in V8][@bug:v8:3599]
* [Accumulation of errors in Mozilla `Math.pow`][@bug:mozilla:618251]
* [Accuracy of hyperbolic trigonometric functions in V8][@bug:paulmiller:es6-shim:334]
* [ES6 shim accuracy issues][@bug:paulmillr:es6-shim:314]
* [TC39 testing of Math built-ins][@bug:tc39:test262:269]
* [V8 `Math.random` PRNG quality][@bug:v8:4566]
* [V8 trig function precision issues][@bug:v8:1975]
* [WebKit `Math.random` repeat values in separate workers][@bug:webkit:36673]
* [Predictable `Math.random` in WebKit][@bug:webkit:26972]


* [Webkit switched to weak PRNG for speed][18]
* [If `Math.floor` provided `-0`, V8 deoptimizes][19]
* [If `Math.ceil` provided `0`, V8 deoptimizes][20]
* [Accuracy of `Math.round` in V8][21]
* [Observability of distinguishable NaNs][22]
* [SpiderMonkey updates `Math.random`][23]
* [V8 blog on xoshirt implementation][24]
* [Webkit bug to use a better PRNG][25]
* [Mobile Safari 32bit Math bug][26]
* [Mozilla optimizations break commutativity][27]
* [Mozilla debate on speed versus precision][28]
* [Division bug to due C library delegation][29]
* [Fixit to unify Math implementations in Chrome][30]
* [Fixit to unify Math.pow implementation in Chrome][31]


## Notes

* To search for V8 Math bugs, see [V8 issue tracker][v8-issue-tracker].
* To search for WebKit Math bugs, see [WebKit issue tracker][webkit-issue-tracker].
* To search for Mozilla Math bugs, see [Bugzilla][mozilla-issue-tracker].


<!-- <links> -->

[@bug:v8:3006]: https://bugs.chromium.org/p/v8/issues/detail?id=3006
[@bug:chromium:320097]: https://bugs.chromium.org/p/chromium/issues/detail?id=320097
[@bug:v8:3089]: https://bugs.chromium.org/p/v8/issues/detail?id=3089
[@bug:mozilla:967709]: https://bugzilla.mozilla.org/show_bug.cgi?id=967709
[@bug:chromium:78263005]: https://github.com/v8/v8/commit/33b5db090258c2a2dc825659c3ad109bd02110c1
[@bug:kangax:compat-table:392]: https://github.com/kangax/compat-table/issues/392
[@bug:mozilla:933257]: https://bugzilla.mozilla.org/show_bug.cgi?id=933257
[@bug:mozilla:892671]: https://bugzilla.mozilla.org/show_bug.cgi?id=892671
[@bug:mozilla:897634]: https://bugzilla.mozilla.org/show_bug.cgi?id=897634
[@bug:mozilla:717379]: https://bugzilla.mozilla.org/show_bug.cgi?id=717379#c5
[@bug:v8:3511]: https://bugs.chromium.org/p/v8/issues/detail?id=3511
[@bug:v8:3509]: https://bugs.chromium.org/p/v8/issues/detail?id=3509
[@bug:v8:3496]: https://bugs.chromium.org/p/v8/issues/detail?id=3496
[@bug:v8:3266]: https://bugs.chromium.org/p/v8/issues/detail?id=3266
[@bug:esdiscuss:038525]: https://esdiscuss.org/topic/es6-accuracy-of-special-functions
[@bug:v8:3468]: https://bugs.chromium.org/p/v8/issues/detail?id=3468
[@bug:esdiscuss:2014-07-31]: https://esdiscuss.org/notes/2014-07-31
[@bug:esdiscuss:038525:spreadsheet]: https://docs.google.com/spreadsheets/d/1t2jrptAvaQetDIYPD8GKc90Dni2dT3FuHgKKFF-eJHw/edit#gid=0
[@bug:v8:3599]: https://bugs.chromium.org/p/v8/issues/detail?id=3599
[@bug:mozilla:618251]: https://bugzilla.mozilla.org/show_bug.cgi?id=618251
[@bug:paulmiller:es6-shim:334]: https://github.com/paulmillr/es6-shim/issues/334
[@bug:paulmillr:es6-shim:314]: https://github.com/paulmillr/es6-shim/issues/314
[@bug:tc39:test262:269]: https://github.com/tc39/test262/pull/269
[@bug:v8:4566]: https://bugs.chromium.org/p/v8/issues/detail?id=4566
[@bug:v8:1975]: https://bugs.chromium.org/p/v8/issues/detail?id=1975
[@bug:webkit:36673]: https://bugs.webkit.org/show_bug.cgi?id=36673
[@bug:webkit:26972]: https://bugs.webkit.org/show_bug.cgi?id=26972

[v8-issue-tracker]: https://bugs.chromium.org/p/v8/issues/list?can=1&q=math&colspec=ID%20Type%20Status%20Priority%20Owner%20Summary%20HW%20OS%20Component%20Stars&num=100&start=100
[webkit-issue-tracker]: https://bugs.webkit.org/buglist.cgi?quicksearch=math
[mozilla-issue-tracker]: https://bugzilla.mozilla.org/buglist.cgi?quicksearch=math

[18]: https://bugs.chromium.org/p/chromium/issues/detail?id=246054
[19]: https://bugs.chromium.org/p/v8/issues/detail?id=2890
[20]: https://bugs.chromium.org/p/v8/issues/detail?id=4059
[21]: https://bugs.chromium.org/p/v8/issues/detail?id=958
[22]: https://esdiscuss.org/topic/observability-of-nan-distinctions-is-this-a-concern
[23]: https://bugzilla.mozilla.org/show_bug.cgi?id=322529#c99
[25]: https://bugs.webkit.org/show_bug.cgi?id=151641
[26]: https://bugs.webkit.org/show_bug.cgi?id=40367
[27]: https://bugzilla.mozilla.org/show_bug.cgi?id=969203#c8
[28]: https://bugzilla.mozilla.org/show_bug.cgi?id=967709
[29]: https://bugzilla.mozilla.org/show_bug.cgi?id=948321
[30]: https://bugs.chromium.org/p/v8/issues/detail?id=5086
[31]: https://bugs.chromium.org/p/v8/issues/detail?id=5157

<!-- </links> -->
