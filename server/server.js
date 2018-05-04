var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');

var path = require('path');
var middleware = require('./middleware/rateLimiter');
var route = require('./resources/pokemon/pokemonRouter');

// Create the Express application:
var app = express();

app.use(bodyParser())
app.use(express.static(path.join(__dirname, '../angular-client')));
app.use(morgan('dev'))
// Attach middleware:
app.use(middleware)

// Import the pokemonRouter and assign it to the correct route:
app.use('/pokemon',route);

app.get('/',function (req , res) {
	 res.json({ message: 'Welcome to the Poke-MongoDB RESTful API!', views: req.views });
})
	
module.exports = app;
