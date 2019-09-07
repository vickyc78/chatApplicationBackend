//require express framwork
var express = require("express");
//require mongoose for create database and query from db
var mongoose = require("mongoose");
//require body-parser for send data in Json format
var bodyParser = require("body-parser");

//require mongoose module it help to create schema
var Schema = mongoose.Schema;

//initialise express router
var router = express.Router();
var app = express();
// var bodyParserJSON = bodyParser.json();
// var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

var env = require("./config/env/development.js");
var dbUrl = require("./config/env/development.js").mongodbUrl;

//It connect to localhost mongodb
mongoose.connect(dbUrl, { useNewUrlParser: true });

//It use for send data in json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//To set port to run node
var port = process.env.PORT || env.PORT;
app.listen(port, function() {
  console.log("App listing on port " + port + " !");
});

//user routes
var userRoutes = require("/home/wohlig/Documents/Project/chatApplicationBackend/config/router.js");
app.use("/User", router);

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
  );
  next();
});

//call User routing
userRoutes(router);

//Example for node
app.get("/", function(req, res) {
  res.send("Hello Express");
});
