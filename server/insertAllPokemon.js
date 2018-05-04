var db = require('./resources/pokemon/Pokemon.js')
var Pokemon = require('./resources/pokemon/Pokemon.js');
var pokeData = require('../data/pokemon.json')

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
	
	Pokemon.create(data, function(err, data) {
    db.disconnect();
  });
};
// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();