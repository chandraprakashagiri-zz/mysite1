'use strict';

//menu controller....

var myapp = angular.module('myapp').
  controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.items = [
      {
          path: '/home', 
          title: 'Home',
          iconMenu:'home'
      },
      {
          path: '/mystory', 
          title: 'My Story',
          iconMenu:'location-arrow'
      },
      {
          path: '/interests',
          title: 'Interests',
          iconMenu:'heart'
      },
      {
          path: '/gallery', 
          title: 'Gallery',
          iconMenu:'camera'
      },
      {
          path: '/sayhello', 
          title: 'Say Hello',
          iconMenu:'comments'
      },
    ];
    $scope.isActive = function(item) {
      if (item.path == $location.path()) {
        return true;
      }
      return false;
    };
  }])

// carousel controller....

myapp.controller('CarouselDemoCtrl',['$scope',function($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'images/one.jpg',
	  title: 'Say Hello1',
    },
    {
      image: 'http://lorempixel.com/400/200/food',
	  title: 'Say Hello2',
    },
    {
      image: 'http://lorempixel.com/400/200/sports',
	  title: 'Say Hello3',
    },
    {
      image: 'http://lorempixel.com/400/200/people',
	  title: 'Say Hello4',
    }
  ];

}]);


//say hello controller...

//myapp.controller('sayHelloCtrlr',['$scope',function($scope){
//
//$scope.socialImages = [
//    {
//        imagePath: 'images/timeline_facebook_select.png'
//    }
//];
//
//
//}]);


 myapp.controller('sayHelloCtrlr',['$scope',function($scope){

  
  $scope.socialImages = [
    {
    imageActive: 'images/icon_facebook_selected@2x.png',
    image: 'images/icon_facebook_normal@2x.png',
    link:'//facebook.com',
    title:'Facebook'
    },
    {
    imageActive: 'images/icon_google_selected@2x.png',
    image: 'images/icon_google_normal@2x.png',
    link:'www.gmail.com',
    title:'Gmail'
    },
    {
    imageActive: 'images/icon_linkedin_selected@2x.png',
    image: 'images/icon_linkedin_normal@2x.png',
    link:'www.linkedin.com',
    title:'Linkedin'
    },
    {
    imageActive: 'images/icon_twitter_selected@2x.png',
    image: 'images/icon_twitter_normal@2x.png',
    link:'www.twitter.com',
    title:'Twitter'
    }
      
  ];
                   
 }]);


