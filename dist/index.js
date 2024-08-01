/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace negativeBinomial
*/
var negativeBinomial = {};

/**
* @name cdf
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/cdf}
*/
setReadOnly( negativeBinomial, 'cdf', require( '@stdlib/stats-base-dists-negative-binomial-cdf/dist' ) );

/**
* @name NegativeBinomial
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/ctor}
*/
setReadOnly( negativeBinomial, 'NegativeBinomial', require( '@stdlib/stats-base-dists-negative-binomial-ctor/dist' ) );

/**
* @name kurtosis
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/kurtosis}
*/
setReadOnly( negativeBinomial, 'kurtosis', require( '@stdlib/stats-base-dists-negative-binomial-kurtosis/dist' ) );

/**
* @name logpmf
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/logpmf}
*/
setReadOnly( negativeBinomial, 'logpmf', require( '@stdlib/stats-base-dists-negative-binomial-logpmf/dist' ) );

/**
* @name mean
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/mean}
*/
setReadOnly( negativeBinomial, 'mean', require( '@stdlib/stats-base-dists-negative-binomial-mean/dist' ) );

/**
* @name mgf
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/mgf}
*/
setReadOnly( negativeBinomial, 'mgf', require( '@stdlib/stats-base-dists-negative-binomial-mgf/dist' ) );

/**
* @name mode
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/mode}
*/
setReadOnly( negativeBinomial, 'mode', require( '@stdlib/stats-base-dists-negative-binomial-mode/dist' ) );

/**
* @name pmf
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/pmf}
*/
setReadOnly( negativeBinomial, 'pmf', require( '@stdlib/stats-base-dists-negative-binomial-pmf/dist' ) );

/**
* @name quantile
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/quantile}
*/
setReadOnly( negativeBinomial, 'quantile', require( '@stdlib/stats-base-dists-negative-binomial-quantile/dist' ) );

/**
* @name skewness
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/skewness}
*/
setReadOnly( negativeBinomial, 'skewness', require( '@stdlib/stats-base-dists-negative-binomial-skewness/dist' ) );

/**
* @name stdev
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/stdev}
*/
setReadOnly( negativeBinomial, 'stdev', require( '@stdlib/stats-base-dists-negative-binomial-stdev/dist' ) );

/**
* @name variance
* @memberof negativeBinomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/negative-binomial/variance}
*/
setReadOnly( negativeBinomial, 'variance', require( '@stdlib/stats-base-dists-negative-binomial-variance/dist' ) );


// EXPORTS //

module.exports = negativeBinomial;
