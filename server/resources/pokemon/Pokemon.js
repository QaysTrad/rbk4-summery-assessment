var mongoose = require('mongoose');

// Connect Mongoose to our local MongoDB via URI specified above and export it below

// Complete the pokemonSchema below.
var pokemonSchema = ({
  number : {type : Number , unique : true},
  name : {type : String , unique : true},
  types : [String],
  imageUrl : String
})

// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Pokemon = mongoose.model('Pokemon', pokemonSchema);


module.exports = Pokemon;
