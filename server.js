var express = require('express');
var api = require('./api');

var app = express();

app.use(express.static('public'));

app.get('/api/pages/:name', api.page);

app.use('/kontrolpanel', api.authenticate, express.static('admin'));

app.listen(3000);
