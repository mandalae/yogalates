const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const dbConnect = require("../connect");
const updateDatabase = require('./updateDatabase');

module.exports = () => {
    return dbConnect().then(db => {
        var cursor = db.collection('version').find({"name": "version"});
		   cursor.each(function(err, doc) {
		      assert.equal(err, null);

		      if (doc != null) {
                  return updateDatabase(db, doc.value);
		      } else {
		         return 'No version found in database';
		      }
		   });
    })
};
