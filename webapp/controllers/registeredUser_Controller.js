
var service = require("../services/registeredUser_Service")
var formidable = require('formidable')
var logger  = require("../config/logger")

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
  console.log("Request body name is from controller is : ", Registered_User.first_name)

  //let responseData = {...responseBody}

service.create_user(Registered_User, (error, response)=>{
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
    return res.json(Registered_User)
    })
    })
}