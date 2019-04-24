
var express = require('express');
var api = express.Router();

var routers = require('./router');

api.use("/registeredUser", routers.registeredUser_routes)

module.exports = api;

