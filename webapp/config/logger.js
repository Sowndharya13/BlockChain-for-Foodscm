'use strict';
const winston = require('winston');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';


const logger= console.log("From logger: ") ;
module.exports =logger;

