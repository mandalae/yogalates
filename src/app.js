require('angular');
var $ = jQuery = require('jquery');
require('bootstrap');
require('angular-ui-router');
require('jquery-easing');

require('./modules/scrolling-nav.js')();

var AppController = require('./controllers/App');
var EducationController = require('./controllers/EducationController');
var router = require('./routes/route');

var app = angular.module('app', ['ui.router']);

app.controller('AppController', ['$scope', AppController]);
app.controller('EducationController', ['$scope', EducationController]);

app.config(router);
