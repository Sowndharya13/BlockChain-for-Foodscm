
const express = require('express');

const path = require('path');
const models = require("./models");
var logger = require("morgan");

const router = require('./routes/routes');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));

app.use(logger("dev"));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Content-Length, Authorization, X-Requested-With, X-XSRF-TOKEN");
	res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
	if ( req.method === 'OPTIONS' ) {
	  console.log('OPTIONS SUCCESS');
	  res.end();
	}
	next();
  });

app.use('/assets', express.static(__dirname+ '/public/assets/'));
app.use('/js', express.static(__dirname+ '/public/js'));

app.get('/landing_page',function(req,res){
	res.sendFile(path.join(__dirname+'/public/index.html'));
  });
	app.get('/dashboard',function(req,res){
		res.sendFile(path.join(__dirname+'/public/dashboard.html'));
		});

	/*  For reg page of other directory*/

app.use('/vendor', express.static('/home/sowndharya/Downloads/colorlib-regform-4/colorlib-regform-4/vendor'));
app.use('/js', express.static('/home/sowndharya/Downloads/colorlib-regform-4/colorlib-regform-4/js'));
app.use('/css', express.static('/home/sowndharya/Downloads/colorlib-regform-4/colorlib-regform-4/css'));

app.get('/register',function(req,res){
	res.sendFile(path.join('/home/sowndharya/Downloads/colorlib-regform-4/colorlib-regform-4/index.html'));
  });


/////////////////////////////
  app.use("/api", router);
models.sequelize.sync().then(function () {
	var server = app.listen(3003, function() {
	console.log('Express server listening on port ' + server.address().port);
	});
});

