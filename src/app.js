require('angular');
var $ = jQuery = require('jquery');
require('bootstrap');
require('angular-ui-router');
require('angular-nl2br-filter')
require('jquery-easing');

require('./modules/scrolling-nav.js')();

var AppController = require('./controllers/App');
var CourseController = require('./controllers/CourseController');
var EducationController = require('./controllers/EducationController');
var HomepageController = require('./controllers/HomepageController');
var router = require('./routes/route');

var app = angular.module('app', ['ui.router', 'nl2br-filter']);

app.controller('AppController', ['$scope', AppController]);
app.controller('CourseController', ['$scope', '$http', CourseController]);
app.controller('EducationController', ['$scope', '$http', EducationController]);
app.controller('HomepageController', ['$scope', '$http', HomepageController]);


app.config(router);
