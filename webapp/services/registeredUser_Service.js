
var dao = require("../daos/registeredUser_Dao")

var logger  = require("../config/logger")
module.exports.create_user = function(registeredUser,callback) {
  logger.info("req : create Items in the service",registeredUser)
  dao.create_user(registeredUser,function (User){
     if(User == '' || User == undefined || User == null )   
    {
      logger.debug(" res : created Users is either null or undefined in the service ");
       callback(User);
    }
  else if(User.message){
  logger.error("cannot create Users in the service")
       callback(User);

    }
    else{
     logger.info("res : created Users in the service")
    callback(User);

    }
  });
}