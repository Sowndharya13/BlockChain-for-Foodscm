
var dao = require("../daos/registeredUser_Dao")

module.exports.create_user =async function(registeredUser,callback) {
 // logger.info("req : create Items in the service",registeredUser)
  
 
  dao.create_user(registeredUser,(error,response)=>{
    if (error){
      return callback(error, null)
      }
      console.log("Create RegisteredUser Service Callback ------->", response)
      
      return callback(null, response)
  });
}


module.exports.validate_login =async function(login_details,callback) {
  // logger.info("req : create Items in the service",registeredUser)
   
  console.log("Login details: ", login_details);
   dao.validate_login(login_details,(error,response)=>{
     if (error){
       return callback(error, null)
       }
       console.log("Login validation Service Callback ------->", response)
      //  console.log("Login as  ------->", response.Registered_User.first_name)

       return callback(null, response)
   });
 }