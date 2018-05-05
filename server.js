const fs = require('fs');
const bodyParser = require("body-parser");
const express = require("express");

const PORT = process.env.PORT || 5505;

const app = express();

const routes = require('./router/routes.js');
const exphbs = require("express-handlebars");


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on http://localhost:" + PORT);
});