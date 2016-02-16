var express = require("express");
var bodyParser = require("body-parser");
var PORT = 3007;

app.use(bodyParser.urlencoded({extended : false}));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var mysql = require("mysql");
var connection = mysql.createConnection({ 
  port: 3306,
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
