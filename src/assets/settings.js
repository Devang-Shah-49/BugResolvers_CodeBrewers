// 'use strict';

var settings = {};

// Note: most of these configuration options can be overridden
// with specific environment variables. See the README for details

// HTTP server's (and WebSocket server's) settings
// NOTE: Generally, you'll want to set the ipaddress to '0.0.0.0' when in
// a production environment (search for INADDR_ANY for more info)
settings.ipaddress = '127.0.0.1';
settings.port = 8080;

// The secret salt used to generate session tokens.
// Set this to a falsy value (i.e. null)
// to have it be auto-generated on startup.
// settings.sessionSecret = '<Change this to a secret string>';
settings.sessionSecret = null;

// Database settings
settings.dbname = 'bugResolversSpeedType';
settings.dbhost = 'localhost';
settings.dbport = 27017; // Default MongoDB port
settings.dbusername = 'devangs'; // username
settings.dbpassword = 'hkcpxAqbqvpQSXTN'; // password

// Database connection string, for convenience (if this is not falsy, it
// will OVERRIDE the previous DB settings)
settings.dbconnectionstring = "mongodb+srv://devangs:hkcpxAqbqvpQSXTN@bugresolversspeedtype.zou5es7.mongodb.net/devjit?retryWrites=true&ssl=true&authSource=admin";
// settings.dbconnectionstring = "mongodb://devangs:hkcpxAqbqvpQSXTN@ac-oamnoyn-shard-00-00.zou5es7.mongodb.net:27017,ac-oamnoyn-shard-00-01.zou5es7.mongodb.net:27017,ac-oamnoyn-shard-00-02.zou5es7.mongodb.net:27017/?ssl=true&replicaSet=atlas-asmdmp-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports = settings;
