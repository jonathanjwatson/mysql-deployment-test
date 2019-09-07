var express = require("express");
require('dotenv').config();

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = require("./config/connection");

// Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  connection.query("SELECT * FROM tests", function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
  console.log("Server listening on: http://localhost:" + PORT);
});
