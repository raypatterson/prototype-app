'use strict';

require('fastclick').attach(document.body);

var Modernizr = require('modernizr');

if (Modernizr.promises) {

	console.log('Promises can be made!');

}
