<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Negative Binomial

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Negative binomial distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-negative-binomial
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var negativeBinomial = require( '@stdlib/stats-base-dists-negative-binomial' );
```

#### negativeBinomial

Negative binomial distribution.

```javascript
var dist = negativeBinomial;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pmf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, r, p )`][@stdlib/stats/base/dists/negative-binomial/cdf]</span><span class="delimiter">: </span><span class="description">negative binomial distribution cumulative distribution function.</span>
-   <span class="signature">[`logpmf( x, r, p )`][@stdlib/stats/base/dists/negative-binomial/logpmf]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of the probability mass function (PMF) for a negative binomial distribution.</span>
-   <span class="signature">[`mgf( t, r, p )`][@stdlib/stats/base/dists/negative-binomial/mgf]</span><span class="delimiter">: </span><span class="description">negative binomial distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pmf( x, r, p )`][@stdlib/stats/base/dists/negative-binomial/pmf]</span><span class="delimiter">: </span><span class="description">negative binomial distribution probability mass function (PMF).</span>
-   <span class="signature">[`quantile( k, r, p )`][@stdlib/stats/base/dists/negative-binomial/quantile]</span><span class="delimiter">: </span><span class="description">negative binomial distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`kurtosis( r, p )`][@stdlib/stats/base/dists/negative-binomial/kurtosis]</span><span class="delimiter">: </span><span class="description">negative binomial distribution excess kurtosis.</span>
-   <span class="signature">[`mean( r, p )`][@stdlib/stats/base/dists/negative-binomial/mean]</span><span class="delimiter">: </span><span class="description">negative binomial distribution expected value.</span>
-   <span class="signature">[`mode( r, p )`][@stdlib/stats/base/dists/negative-binomial/mode]</span><span class="delimiter">: </span><span class="description">negative binomial distribution mode.</span>
-   <span class="signature">[`skewness( r, p )`][@stdlib/stats/base/dists/negative-binomial/skewness]</span><span class="delimiter">: </span><span class="description">negative binomial distribution skewness.</span>
-   <span class="signature">[`stdev( r, p )`][@stdlib/stats/base/dists/negative-binomial/stdev]</span><span class="delimiter">: </span><span class="description">negative binomial distribution standard deviation.</span>
-   <span class="signature">[`variance( r, p )`][@stdlib/stats/base/dists/negative-binomial/variance]</span><span class="delimiter">: </span><span class="description">negative binomial distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [negative binomial][negative-binomial-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`NegativeBinomial( [r, p] )`][@stdlib/stats/base/dists/negative-binomial/ctor]</span><span class="delimiter">: </span><span class="description">negative binomial distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var NegativeBinomial = require( '@stdlib/stats-base-dists-negative-binomial' ).NegativeBinomial;

var dist = new NegativeBinomial( 4.0, 0.2 );

var y = dist.pmf( 4.0 );
// returns ~0.023
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var negativeBinomial = require( '@stdlib/stats-base-dists-negative-binomial' );

/*
* Let's take an example of flipping a biased coin until getting 5 heads.
* This situation can be modeled using a Negative Binomial distribution with r = 5 and p = 1/2.
*/

var r = 5.0;
var p = 1/2;

// Mean can be used to calculate the average number of trials needed to get 5 heads:
console.log( negativeBinomial.mean( r, p ) );
// => 5

// PMF can be used to calculate the probability of getting heads on a specific trial (say on the 8th trial):
console.log( negativeBinomial.pmf( 8, r, p ) );
// => ~0.06

// CDF can be used to calculate the probability up to a certain number of trials (say up to 8 trials):
console.log( negativeBinomial.cdf( 8, r, p ) );
// => ~0.867

// Quantile can be used to calculate the number of trials at which you can be 80% confident that the actual number will not exceed:
console.log( negativeBinomial.quantile( 0.8, r, p ) );
// => 7

// Standard deviation can be used to calculate the measure of the spread of trials around the mean:
console.log( negativeBinomial.stdev( r, p ) );
// => ~3.162

// Skewness can be used to calculate the asymmetry of the distribution of trials:
console.log( negativeBinomial.skewness( r, p ) );
// => ~0.949

// MGF can be used for more advanced statistical analyses and generating moments of the distribution:
console.log( negativeBinomial.mgf( 0.5, r, p ) );
// => ~2277.597
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-negative-binomial.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-negative-binomial

[test-image]: https://github.com/stdlib-js/stats-base-dists-negative-binomial/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-negative-binomial/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-negative-binomial?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-negative-binomial.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-negative-binomial/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-negative-binomial/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-negative-binomial/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-negative-binomial/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-negative-binomial/blob/main/branches.md

[negative-binomial-distribution]: https://en.wikipedia.org/wiki/Negative_binomial_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/negative-binomial/ctor]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-ctor

[@stdlib/stats/base/dists/negative-binomial/kurtosis]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-kurtosis

[@stdlib/stats/base/dists/negative-binomial/mean]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-mean

[@stdlib/stats/base/dists/negative-binomial/mode]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-mode

[@stdlib/stats/base/dists/negative-binomial/skewness]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-skewness

[@stdlib/stats/base/dists/negative-binomial/stdev]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-stdev

[@stdlib/stats/base/dists/negative-binomial/variance]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-variance

[@stdlib/stats/base/dists/negative-binomial/cdf]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-cdf

[@stdlib/stats/base/dists/negative-binomial/logpmf]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-logpmf

[@stdlib/stats/base/dists/negative-binomial/mgf]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-mgf

[@stdlib/stats/base/dists/negative-binomial/pmf]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-pmf

[@stdlib/stats/base/dists/negative-binomial/quantile]: https://github.com/stdlib-js/stats-base-dists-negative-binomial-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
