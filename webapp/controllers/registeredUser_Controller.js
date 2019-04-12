console.log('Express server 1');   

var service = require("../services/registeredUser_Service")

var logger  = require("../config/logger")

module.exports.create_user = function(req, res) {
  var Registered_User = req.body;
  logger.info("req : create Registered_User in the controller",Registered_User)
  service.create_user(Registered_User,function (User){
 if(User == '' || User == undefined || User == null )   
{
      logger.debug(" res : created Registered_User is either empty or undefined in the controller ");
      res.status(204);
      res.json(User);
    }
  else if(User.message){
  logger.error("res : cannot created Registered_User in controller");
     res.status(500)
     res.json(User);

  }
  else{
    logger.info("res : created Registered_User in the controller")
     res.status(201);
     res.json(User);

  }

  });
}