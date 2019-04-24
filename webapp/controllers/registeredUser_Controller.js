
var registeredUser_Service = require("../services/registeredUser_Service")
var formidable = require('formidable')


module.exports.create_user = function(req, res) {
  
  var form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields) {
 
  let Registered_User = {
    first_name : fields.first_name,
    email : fields.email,
    password: fields.password ,
    location: fields.location,
    role: fields.role

  }
  registeredUser_Service.create_user(Registered_User, (error, response)=>{
  if (error){
    console.log('Error Creating Employee', error)
    Registered_User.status = 400
    Registered_User.error = error.message
    res.status(400)
    
    }
    else{
      Registered_User.status = 201
      Registered_User.error = null
      Registered_User.data = response 
      res.status(201) 
     
    }
    return res.redirect('/register');
   
    //return res.json(Registered_User)
    })
    })
}  
 // For login validation

module.exports.validate_login = function(req, res) {
  
  var form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields) {
  let login_credentials = {

    user_entered_email : fields.email,
    user_entered_password: fields.password ,
   
  }
 console.log("login_credentials:     ///.   ", login_credentials);
  registeredUser_Service.validate_login(login_credentials, (error, response)=>{
  if (error){
    console.log('Error Validating user login', error)
    login_credentials.status = 400
    login_credentials.error = error.message
    res.status(400)
    return res.redirect('/register');
       }
    else{
      login_credentials.status = 201
      login_credentials.error = null
      login_credentials.data = response 
      res.status(201) 
      return res.redirect('/landing_page');
    }
      
    //return res.json(Registered_User)
    })
    })
} 

