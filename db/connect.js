var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var getDBUrl = () => {
    var dbUrl = process.env.YOGALATES_DB_URL;
    if (!dbUrl){
        dbUrl = 'mongodb://localhost:27017/local';
    }
    return dbUrl;
}

var dbConnect = () => {
    var promise = new Promise((resolve, reject) => {
        MongoClient.connect(getDBUrl(), (err, db) => {
            if (err){
                reject(err);
            }
            resolve(db);
        });
    });

    return promise;
}


module.exports = dbConnect
