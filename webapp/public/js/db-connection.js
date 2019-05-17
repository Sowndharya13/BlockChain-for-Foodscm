function validateSignUp(){

app.get('/', function(req, resp){
  var sql = "INSERT INTO signed_users values('" + connection.escape(email) + "', '"+connection.escape(psw) + "')";

  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log("Succesfully SignedIn !!! ");
  });
});

}
 