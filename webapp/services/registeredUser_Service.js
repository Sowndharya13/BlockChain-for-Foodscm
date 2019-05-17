
var dao = require("../daos/registeredUser_Dao")

var logger  = require("../config/logger")
module.exports.create_user = function(registeredUser,callback) {
 // logger.info("req : create Items in the service",registeredUser)
  dao.create_user(registeredUser, (User)=>{
    
  callback (User)
  });
}