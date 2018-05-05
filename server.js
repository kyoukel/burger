const fs = require('fs');
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5505;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require('./controllers/burgersController.js');
app.use(routes);

app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      console.log("nope, keep trying");
    }
  });
});

app.post("/burgers", function(req, res) {
  connection.query("INSERT INTO burgers(burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
    if (err) {
      console.log("try again");
    }
  });
});

app.get("/burgers", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.json(data);
  });
});

app.put("/burgers/: id", function(req, res) {
  connection.query("UPDATE burgers SET burger_names = ? WHERE id = ?", [req.body.burger_name, req.params.id], function(err, result) {
    if (err) {
      return res.status(500).end();
    } else if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

app.listen(PORT, function() {
  console.log("Server listening on http://localhost:" + PORT);
});