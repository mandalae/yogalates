const http = require('http');
const dbConnect = require('../db/connect')
const mongoFind = require('../db/find')

module.exports = function(req, res){

    dbConnect().then(db => {
        mongoFind(db, 'pages', {name: req.params.name}).then(function(doc){
            res.setHeader('Content-Type', 'application/json');
            res.send(doc);
          });
    });
    
};