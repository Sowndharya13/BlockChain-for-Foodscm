var models = require("../models");

var sequelize = models.sequelize;

var PropertiesReader = require('properties-reader');

var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/registeredUser_SQL.properties');

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
    if (response==null){
        throw new Error("Cannot Create Registered User")
        }
        console.log('Dao Success Response')
        return callback(null, response)
}).catch(error=>{
    console.log(error)
    return callback(error, null)
})
}
