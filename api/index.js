var MongoClient = require('mongodb').MongoClient;
var http = require('http');
var config = require('../config/config.json');
var mongoFind = require('./db/find');


module.exports = function(req, res){

	MongoClient.connect(config.db.url, function(err, db) {

	  mongoFind(db, 'ingredients', {name: req.params.name}).then(function(doc){
	  	res.send(doc);

	  }).catch(function(reason){

	  	http.get('http://world.openfoodfacts.org/api/v0/product/' + req.params.name + '.json', (response) => {
	  		var data = '';
	  		response.on('data', (chunk) => {
	  			data += chunk;
	  		});

	  		response.on('end', () => {
	  			res.send(data);
	  		});
	  	}).on('error', (e) => {
	  		res.send(reason);
	  	});
	  	
	  });
	});
};