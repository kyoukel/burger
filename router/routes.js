var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(burgerData) {
        res.render("Index", { burger_data: burgerData });
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/: id", function(req, res) {
    burger.update(req.params.id, function(result) {
        console.log(result);
        res.render("index", { burger_data: burgerData });
    });
});


// EXAMPLE FROM WEDS CLASS
// const Cat = require('model')
// module.exports = {
//     index: () => {
//         Cat.all()
//     },
//     create: (data) => {},
//     read: (id) => {
//         Cat.get_by_id(id);
//     },
//     update: (data) => {},
//     delete: (data) => {},
// }

//index is all 
//should have a new controller and model for every different type of http call. 