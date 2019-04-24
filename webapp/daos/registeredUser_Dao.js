var models = require("../models");

// var sequelize = models.sequelize;

// var PropertiesReader = require('properties-reader');


console.log("From dao of registered USer");

module.exports.create_user = function(Registered_User,callback) {
//logger.info("req : create Registered_User in the dao",Registered_User);
let User = {
    first_name : Registered_User.first_name,
    email : Registered_User.email,
    password: Registered_User.password ,
    location: Registered_User.location,
    role: Registered_User.role

  };
console.log("From dao of registered user: ", User);
models.Registered_User.create(User).then(response => {
    if (response==''){
        throw new Error("Cannot Create Registered User")
        }
        console.log('Dao Success Response')
        return callback(null, response)
}).catch(error=>{
    console.log(error)
    return callback(error, null)
})
} 



module.exports.validate_login = function(login_credentials,callback) {
  //logger.info("req : create Registered_User in the dao",Registered_User);
  console.log("From dao login_credentials mattum ==>  ", login_credentials);
  let login_cred = {
      email : login_credentials.user_entered_email,
      password: login_credentials.user_entered_password,
    };


  console.log("From dao of registered user validate Login : ", login_cred);
  models.Registered_User.findAll({
    // attributes: ['Registered_User.first_name'],
    where: {
      email: login_cred.email,
      password: login_cred.password
    }
  }).then(response => {
      if (response== ''){
          throw new Error("Validation failed")
          
          }
          console.log('Dao Success Response logged in as ', response)
          return callback(null, response)
  }).catch(error=>{
      console.log(error)
      return callback(error, null)
  })
  }