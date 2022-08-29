const express = require("express");
const path = require("path");
const routes = require("../thisApp/routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;


mongoose.connect(
  "mongooseurl",
  {
    useNewUrlParser: true
  }
);
//
let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // app.use(express.static(path.join(__dirname, "client/build")));
  app.use(express.static(__dirname + "/client/build"));
}

app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
