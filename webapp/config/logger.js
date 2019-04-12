'use strict';
const winston = require('winston');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';


const logger = console.log("Error thrown from logger")

module.exports =logger;

