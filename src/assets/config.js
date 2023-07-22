'use strict';

var path = require('path');
var settings;
try {
    settings = require('./settings');
} catch (e) {
    settings = {};
}

// Constants
var SALT_LENGTH = 14; // 112 bits / 8 bits per char == 14

var genSalt = function(n) {
    var chars = [],
        corpus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()-_=+[{]}\\|;:,<.>/?',
        length = corpus.length;

    for (var i = 0; i < n; i++) {
        chars.push(corpus.charAt(Math.floor(Math.random() * length)));
    }

    return chars.join('');
};

/**
 * Configuration app for bugResolvers
 */
var bugResolversConfig = function() {
    // Setup configuration from the environment
    var self = this;

    self.repo = process.env.bugResolvers_REPO_DIR ||
        path.join(__dirname, '..');

    self.sessionSecret = process.env.bugResolvers_SESSION_SECRET ||
        settings.sessionSecret || genSalt(SALT_LENGTH);

    self.ipaddress = process.env.bugResolvers_NODEJS_IP ||
        settings.ipaddress || '0.0.0.0';
    self.port = process.env.bugResolvers_NODEJS_PORT || process.env.PORT ||
        settings.port || 8080;

    self.dbconnectionstring = process.env.bugResolvers_DB_CONNECTIONSTRING ||
        settings.dbconnectionstring || null;

    self.db = {
        name: process.env.bugResolvers_DB_NAME ||
            settings.dbname || 'bugResolvers',
        host: process.env.bugResolvers_DB_HOST ||
            settings.dbhost || 'localhost',
        port: process.env.bugResolvers_DB_PORT ||
            settings.dbport || 27017,
        username: process.env.bugResolvers_DB_USERNAME ||
            settings.dbusername || 'admin',
        password: process.env.bugResolvers_DB_PASSWORD ||
            settings.dbpassword || 'password'
    };
};

module.exports = bugResolversConfig;
