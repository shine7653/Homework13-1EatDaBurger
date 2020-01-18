// Sequelize references the standard library
var Sequelize = require('sequelize');

// This reference our connection to the DB
var sequelize = require("../config/connection");

//Create a 'Burgers' model that matches up with DB
var Burgers = sequelize.define("burger", {
    burger_name: {
        type: Sequelize.STRING
    },
    devoured: {
        type: Sequelize.BOOLEAN
    },
    createdAt: {
        type: Sequelize.DATE
    }
});

// syncs with DB
Burgers.sync();

module.exports = Burgers;

