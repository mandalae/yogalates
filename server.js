var express = require('express');
var api = require('./api');

var app = express();

// Update the db
console.log('Updating the database...');
api.updateDb().then((version) => {
    console.log('Database updated to version', version);

    app.use(express.static('public'));

    app.get('/api/pages/:name', api.page);

    app.use('/kontrolpanel', api.authenticate, express.static('admin'));

    app.listen(3000);
    console.log('Listening on port 3000');
}).catch((err) => {
    console.log(err);
});
