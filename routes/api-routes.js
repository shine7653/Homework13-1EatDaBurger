var express = require("express");

var app = express.Router();
var Burgers = require("../models/burgerModel.js");

// get route -> index
app.get("/", function (req, res) {
    res.redirect("/burgers");
});

app.get("/burgers", function (req, res) {
    // express callback response by calling burger.selectAllBurger
    Burgers.findAll({})
        .then(burgerData => {

            // console.log("Burger DATA" ,burgerData);
            // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
            res.render('index', { burgerData: burgerData});
        })
        .catch(err => console.log(err));
});

// post route -> back to index
app.post("/burgers/create", function (req, res) {

    // console.log("Burger data: ");
    // console.log(req.body);

    // takes the request object using it as input for burger.addBurger
    Burgers.create({
        burger_name: req.body.burger_name
    })
        .then(result => {
            // console.log(result);
            // 'results' here would be the newly created Burgers
            res.redirect("/");
        });
});

// put route -> back to index
app.put("/burgers/:id", function (req, res) {
    console.log(req.params.id);

    Burgers.update({devoured : true},
        {
          where: {
            id: req.params.id
          }
        })
        .then(function(dbPost) {
          res.json(dbPost);
        });
        
    // Burgers.update(req.params.id, function (result) {
    //     // wrapper for orm.js that using MySQL update callback will return a log to console,
    //     // render back to index with handle
        
    //     console.log(result);
    //     // Send back response and let page reload from .then in Ajax
    //     res.sendStatus(200);
    // });
});

module.exports = app;

// 1. click the button
// 2. Tell the server I click the id
// 3. Server's gonna call the database to update the ID 
// 4. The database Update the specific ID
// 5. When the page refreshed, the page will have the updated data


// // This file offers a set of routes for displaying and saving data to the db

// // Dependancies
// var Burgers = require('../models/burgerModel');

// // Routes
// module.exports = function (app) {
//     app.get('/api/all', function (req, res) {

//         // Find all Burgers and returning them to the user as JSON
//         // Sequelize is Asynchronous
//         // If we want something to be guaranteed to happen after the query, use .then
//         Burgers.findAll({})
//             .then(burger => {
//                 console.log(burger);
//                 res.render('index', { burger });     
//             })
//             .catch(err => console.log(err));
//     });

//     app.post('/api/all', function (req, res) {

//         console.log("Burger data: ");
//         console.log(req.body);

//         Burgers.create({
//             burger_name: req.body.burger_name
//         }).then(function (results) {
//             // 'results' here would be the newly created Burgers
//             res.end();
//         });
//     });

// };

