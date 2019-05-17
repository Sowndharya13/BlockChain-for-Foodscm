var models = require("../models");

var sequelize = models.sequelize;

var PropertiesReader = require('properties-reader');

var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/registeredUser_SQL.properties');

var logger = require("../config/logger")
console.log("From dao of registered USer");

module.exports.create_user = function(Registered_User,callback) {
//logger.info("req : create Registered_User in the dao",Registered_User);
  
let data = Registered_User

models.Registered_User.create(data).then(response => {
    callback(response)

}).catch(error=>{
    callback(error)
})

}
