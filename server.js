// Dependancies
const mysql = require('mysql');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Bring the connection and after this, make a Model
const con = require('./config/connection');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static directory to be served
app.use(express.static(path.join(__dirname, 'public'));



//Routes
require("./app/routes/api-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
})

