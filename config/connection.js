// //this works when i'm inside the actual file
// var express = require("express");
// var bodyParser = require("body-parser");
// var PORT = process.env.PORT || 3007; //changed from just PORT 3007 in original code
// var app = express();

// app.use(bodyParser.urlencoded({extended : false}));

// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({defaultLayout:"main"}));
// app.set("view engine", "handlebars");

// var mysql = require("mysql");
// // var connection = mysql.createConnection({ 
// //   port: 3306, //btw port 3306 is common convention for a mysql port; this mysql port has to be a different port from the node port 3306 is the default mysql port
// //   host: "z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", // this was "localhost" before utilizing JAWSDB in order to successfully connect to heroku
// //   user: "mzi7vmp5g0boo6o9", // this was "root" before utilizing mzi7vmp5g0boo6o9 to connect to JAWSDB for heroku
// //   password: "unsve3rgn63zlu7f", // this password part was commented out before utilizing JAWSDB to connect to heroku
// //   database: "burgers_db" // this is also the database name for heroku

// // })

// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection;


//this works when i'm inside the actual file
var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3007; //changed from just PORT 3007 in original code
var app = express();

app.use(bodyParser.urlencoded({extended : false}));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var mysql = require("mysql");
var connection = mysql.createConnection({ 
  port: 3306, //btw port 3306 is common convention for a mysql port; this mysql port has to be a different port from the node port 3306 is the default mysql port
  host: "localhost",
  user: "root",
  //password: " ",
  database: "burgers_db"

})

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
