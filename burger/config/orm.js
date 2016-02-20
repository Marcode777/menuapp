var connection = require("./connection.js") //single dot means "in this folder" requiring is like importing

var orm = {
  //this will show you the entire burger selection
  // selectAll: function(table){
  //   connection.query("SELECT * FROM burgers",function(err, res){
  //     if(err) throw err;
  //     console.log("this result should not be a string");
  //   });
  // }
   showBurgers: function(cb) {
    var query = "SELECT * FROM burgers";
    connection.query(query, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  }, 
  addBurger: function(burgerName, cb) {
    var query = "INSERT INTO burgers (burger_name, devoured, ready) VALUES (?, TRUE , FALSE)";
    connection.query(query, [burgerName], function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  devourBurger: function(burgerID, cb) {
    var query = "UPDATE burgers SET devoured=false, ready=true WHERE id=?";
    connection.query(query, [burgerID], function(err, res) {
      if (err) throw  err;
      cb(res);
    });
  },
  deleteBurger: function(burgerID, cb) {
    var query = "DELETE FROM burgers WHERE ID = ? ";
    connection.query(query, [burgerID], function (err, res) {
      if(err) throw err;
      cb(res);
    });
  }
}


module.exports = orm;