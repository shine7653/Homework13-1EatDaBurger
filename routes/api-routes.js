// This file offers a set of routes for displaying and saving data to the db

// Dependancies
var Burgers = require('../models/burgerModel');

// Routes
module.exports = function (app) {
    app.get('/api/all', function (req, res) {

        // Find all Burgers and returning them to the user as JSON
        // Sequelize is Asynchronous
        // If we want something to be guaranteed to happen after the query, use .then
        Burgers.findAll({})
            .then(burgers => {
                console.log(burgers);

                res.render('main', { burgers });

                // .then(function(results) {            
                //     res.json(results);            
            })
            .catch(err => console.log(err));
    });

    app.post('/api/new', function (req, res) {

        console.log("Burger data: ");
        console.log(req.body);

        Burgers.create({
            burger_name: req.body.burger_name,
            createAt: req.body.createAt
        }).then(function (results) {
            // 'results' here would be the newly created Burgers
            res.end();
        })
    });

};

