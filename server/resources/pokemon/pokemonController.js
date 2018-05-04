var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	Pokemon.create(req.body , function (err , data) {
		if(err){res.status(404).send(err)}
			res.send(data);
	})
};

exports.retrieve = function (req, res) {
	Pokemon.find({} , function(err, data) {
		res.json(data);
	});
};

exports.retrieveOne = function (req, res) {
	var number = { number: req.params.number };
	Pokemon.findOne(number , function (err , data) {
		if(err){res.send(err)}
			res.send(data)
	})
};

exports.updateOne = function (req, res) {
	var number = { number: req.params.number };
	Pokemon.findOneAndUpdate(number , req.body , function (err , data) {
		if(err){res.status(404).send(err)}
			res.status(200).send(data)
	})
};

exports.delete = function (req, res) {
	Pokemon.remove({}, function (err) {
		if (err) console.log(err);
	})

};

exports.deleteOne = function (req, res) {
	var number = { number: req.params.number };
	Pokemon.findOneAndRemove(number, function (err) {
		if (err) console.log(err);
	})

};
