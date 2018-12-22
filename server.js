var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

//var PORT = 3000;

// Initialize Express
var app = express();

app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

//Connect to the Mongo DB
databaseURI = "mongodb://localhost/populateMongo";
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
}
else {
	mongoose.connect(databaseURI, { useNewUrlParser: true });
};

mongoose.Promise = Promise;
var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});

db.once("open", function() {
	console.log("Mongoose connection successful!");
});
// Start the server
//app.listen(PORT, function() {
console.log(process.env.PORT);
var PORT = 3000;
app.listen(PORT || 6000, function() {
  console.log("App running on port " + PORT + "!");
});
