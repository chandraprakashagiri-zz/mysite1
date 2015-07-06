var myapp=angular.module('myapp', ['ui.router','ui.bootstrap'])

myapp.controller('NavCtrl', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());

     return active;
};
});
myapp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
      .state('sayhello', {
             url: "/sayhello",
              templateUrl: "views/sayhello.html"
    })
    $stateProvider
        .state('home', {
        url: "/home",
      templateUrl: "views/home.html"
    })
    $stateProvider
    .state('mystory', {
      url: "/mystory",
      templateUrl: "views/mystory.html"
    })
      $stateProvider
    .state('gallery', {
      url: "/gallery",
      templateUrl: "views/gallery.html"
    })
        $stateProvider
    .state('interests', {
      url: "/interests",
      templateUrl: "views/interests.html"
    })

});
