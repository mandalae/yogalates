module.exports = function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('root', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainController'
    })
    .state('news', {
      url: "/news",
      templateUrl: "views/news.html"
    })
    .state('classes', {
      url: "/classes",
      templateUrl: "views/classes.html"
    })
    .state('travels', {
      url: "/travels",
      templateUrl: "views/travels.html"
    })
    .state('signup', {
      url: "/signup",
      templateUrl: "views/signup.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/contact.html"
    })
    .state('education', {
      url: "/education",
      templateUrl: "views/education.html"
    });

}