const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;

var _db;

const getDBUrl = () => {
    var dbUrl
    if (process.env.YOGALATES_DB_URL){
        dbUrl = 'mongodb://web_user:' + process.env.WEB_USER_PW + '@' + process.env.YOGALATES_DB_URL + ':27017/yogalates'
    } else {
        dbUrl = 'mongodb://web_user:' + process.env.WEB_USER_PW + '@localhost:27017/yogalates';
    }

    if (!dbUrl){
        throw new Error('No DB URL found')
    }

    return dbUrl;
}

const dbConnect = () => {
    var promise = new Promise((resolve, reject) => {
        if (!_db){
            MongoClient.connect(getDBUrl(), (err, db) => {
                if (err){
                    reject(err);
                }
                _db = db;
                resolve(db);
            });
        } else {
            resolve(_db);
        }
    });

    return promise;
}


module.exports = dbConnect
