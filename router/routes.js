var express = require("express");
var router = express.Router();

var burgercontroller = require("../controllers/burgersController");

router
    .get("/", function(req, res) {
        burgercontroller.all()
            .then(data => res.render("index.handlebars", {burgers: data}))
            .catch(err => console.log(err))
        })

    .post("/api/burgers", function(req, res) {
    // burgercontroller.create(req.body)
    //     .then(() => res.redirect("/"))
    //     .catch(err => next(err))
})

    .put("/api/burgers/: id", function(req, res, next) {
        // const {id, ...devoured } = req.body;
        // burgercontroller.update(id, devoured)
        // .then(data => res.json(data))
        // .catch(err => res.json(err))
});

module.exports = router;