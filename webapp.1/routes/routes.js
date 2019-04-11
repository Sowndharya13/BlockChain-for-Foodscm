
var express = require('express');
var router = express.Router();
var routers = require('./router')

router.use("/registereduser", routers.registereduser_routes)

