'use strict';

const config = require('./fmw.config');

console.info('Loading: FMW Config – PRODUCTION');

module.exports = Object.assign(config, {
	canWeAddAnythingHere: true
});
