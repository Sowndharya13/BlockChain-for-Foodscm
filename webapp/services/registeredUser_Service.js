
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