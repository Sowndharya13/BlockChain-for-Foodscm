const express = require('express');
const logger = require('morgan');
const app = express();
const path = require('path');
const router = express.Router();
const Sequelize = require('sequelize');
//var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
const http = require('http');

app.use(logger('dev'));
app.use(bodyParser.json());

router.get('/',function(req,res){
 // res.sendFile(path.join(__dirname+'../../index.html'));
 res.json({ message: 'welcome to our upload module apis' });

 //__dirname : It will resolve to your project folder.
});


router.get('/sign_up',function(req,res){
  res.sendFile(path.join(__dirname+'../../index.html'));
});
app.use(express.static("."));
app.use(express.static('public'));
app.use('assets', express.static(__dirname+ '../../assets'));
app.use('js', express.static(__dirname+ '../../js'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/*route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login)
/*
// Option 1: Passing parameters separately
const sequelize = new Sequelize('users', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql' 
});

// Option 2: Using a connection URI
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "users"
});

con.connect(function(err) {
  /* Connection code */
  // if (err) throw err;
  // console.log("Connected!");
//});
//*/
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');

