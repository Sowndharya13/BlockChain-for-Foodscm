
const express = require('express');

const http = require('http');
const path = require('path');
var models = require("./models");

const sequelize = models.sequelize;

const router = require('./routes/routes');

const logger = require('morgan');

const app = express();
//var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
app.use(logger('dev'));
app.use(bodyParser.json());

app.use("/api", router);
app.use('/',express.static(__dirname+'/public/index.html'));



app.use('/assets', express.static(__dirname+ '/public/assets/'));
app.use('/js', express.static(__dirname+ '/public/js'));


//  app.listen(process.env.port || 3000);
//  console.log('Running at Port 3000');
models.sequelize.sync().then(function () {
	var server = app.listen(3003, function() {
	console.log('Express server listening on port ' + server.address().port);
	});
});

