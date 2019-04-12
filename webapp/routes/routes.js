
var express = require('express');
var api = express.Router();
console.log('Express server 4');   

var routers = require('./router');
console.log('Express server 5');   

api.use("/registeredUser", routers.registeredUser_routes)

module.exports = api;
