var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var config = require('../../config/config.json');

module.exports = function(){

    var promise = new Promise((resolve, reject) => {
        MongoClient.connect(config.db.url, (err, db) => {
            if (err){
                reject(err);
            }
            resolve(db);
        });
    });

    return promise;

};