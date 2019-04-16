
var service = require("../services/registeredUser_Service")

var logger  = require("../config/logger")

module.exports.create_user = function(req, res) {
  var Registered_User = req.body;
  
console.log("Request bodyis : ", req.body)
service.create_user(Registered_User, (User)=>{

res.json(User)
res.status(200);
})


}