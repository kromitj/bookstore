var jsonPackage    = require('../package.json');
var dotenv         = require('dotenv');
const PORT         = 3000;

// dotenv.load();

// create an Obj to hold all the package info
var config = {};

config.name        = jsonPackage.name;
config.version     = jsonPackage.version;
config.description = jsonPackage.description;
config.company     = jsonPackage.company;
config.author      = jsonPackage.author;
config.keywords    = jsonPackage.keywords;
config.engine      = jsonPackage.engines.node || pkg.engines.iojs;
config.port        = process.env.PORT || PORT;

// Set up Database

config.mongodb     = {};
config.mongodb.url = 'mongodb://localhost/bookstore';

module.exports     = config;