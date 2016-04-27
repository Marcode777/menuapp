var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var connection = require("./config/connection.js");
var handleBars = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;
app.use("/static", express.static("public")); // this line lets me pull images from the public folder where i have images stored and have it displayed onto the page
//but on index.handlebars it is referred to as src="/static/burger.jpg" for some reason


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


//you have to be in the directory to perform the server.js code

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/add', routes);
app.use('/devour', routes);
app.use('delete', routes)


app.listen(PORT, function(){
  console.log("Listening on %s", PORT);
});