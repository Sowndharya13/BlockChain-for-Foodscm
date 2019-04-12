var models = require("../models");

var sequelize = models.sequelize;

var PropertiesReader = require('properties-reader');

var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/registeredUser_SQL.properties');

var logger = require("../config/logger")

module.exports.create_user = function(Registered_User,callback) {
logger.info("req : create Registered_User in the dao",Registered_User);
  var create_query = sqlQuery._properties.create_user;
  sequelize.query(create_query, {
    replacements: {
    	firstname : Registered_User.firstname,
    	email : Registered_User.email,
    	password : Registered_User.password,
        role : Registered_User.role,
        location : Registered_User.location,
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Registered_User
  }).then(function(User) {
    if(User === null || User === undefined || User == ''){
      logger.debug(" created Registered_User is either null or undefined in the dao ")
      callback(User);    
}
     else {
      logger.info("res :  created Registered_User in the dao")
      callback(User);    
}
	}).catch(function(error){
   logger.error("res : cannot create Registered_User in the dao",error)
      callback(error);
 })
}
