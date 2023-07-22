'use strict';

var events = require('events');

var bugResolversEventNet = function() {
};

bugResolversEventNet.prototype = new events.EventEmitter();

var enet = new bugResolversEventNet();
module.exports = enet;
