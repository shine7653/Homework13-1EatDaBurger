// Initiate the connection to MYSQL

// Dependancies
var Sequelize = require('sequelize');

// Create mySQL connection using Sequelize
var sequelize = new Sequelize('burger_db', "root", "~Ma009090", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max:5,
        min:0,
        idle:10000
    }
});

module.exports = sequelize;