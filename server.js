var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var db = require("./models");

var PORT = process.env.PORT || 3000;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://admin:admin123@ds117681.mlab.com:17681/heroku_hdq49w3r";

var app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  // useMongoClient: true
});



require("./routes/index.js")(app)

// additional libraries
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});