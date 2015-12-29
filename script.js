var app=angular.module('paramweb',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
	  .when('/blog',{
                templateUrl: 'blog.html'
          })
          .when('/about',{
                templateUrl: 'about.html'
          });
});
app.controller('hpController',function($scope){
    /*      
    Here you can handle controller for specific route as well.
    */
});