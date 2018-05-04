var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

//find all pokemon from the database
.get(pokemonController.retrieve)
//add to the database 
.post(pokemonController.createOne)
//delete from the database 
.delete(function (req , res) {
	pokemonController.delete(req , res)
	
});

pokemonRouter.route('/:number')

//retrive one element form the database 
.get(function (req, res) {
		pokemonController.retrieveOne(req , res);
	})
//update a element form the database 
.put(function (req , res) {
 pokemonController.updateOne(req ,res)
})
//delete form the database 
.delete(function (req , res) {
	pokemonController.deleteOne(req , res)	
});

module.exports = pokemonRouter;