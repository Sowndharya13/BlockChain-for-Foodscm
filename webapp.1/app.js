const express = require('express');
const logger = require('morgan');
const app = express();
const path = require('path');
const router = express.Router();
const Sequelize = require('sequelize');
//var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
const http = require('http');
var models = require("./models");
      
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/api/public', router)

// get all users
app.get('/registereduser', (req, res) => {
    User.findAll().then(registereduser => res.json(registereduser))
    
})
app.post('/registereduser',function(req,res){

registereduser.create(req.body)
.then(registereduser => res.json(registereduser))

return res.redirect('/public/index.html');
});

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/public/index.html'));
});


app.use('/assets', express.static(__dirname+ '/public/assets/'));
app.use('/js', express.static(__dirname+ '/public/js'));


//  app.listen(process.env.port || 3000);
//  console.log('Running at Port 3000');
models.sequelize.sync().then(function () {
	var server = app.listen(3003, function() {
	console.log('Express server listening on port ' + server.address().port);
	});
	});

