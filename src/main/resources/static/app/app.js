/*(function(angular) {
    angular.module("myApp.controllers", []);
    angular.module("myApp.services", []);
    angular.module("myApp", ["ngResource", "myApp.controllers", "myApp.services"]);
}(angular));*/

var myApp = angular.module("myApp",['ui.router','ui.bootstrap','ngCookies']);

myApp.config(function ($stateProvider,$urlRouterProvider,$httpProvider) {

     $urlRouterProvider.otherwise('dashboard');

    $stateProvider
        .state('hello',{
            url:'/hello',
            templateUrl:"./views/hello.html",
            controller:'helloController'
        })
        .state('hello2',{
            url:'/hello2',
            templateUrl:'./views/hello2.html'
        })
        .state('dashboard',{
            url:'/dashboard',
            templateUrl:'./views/dashboard.html',
            controller:'dashboardController'
        })
        .state('upload',{
            url:'/upload',
            templateUrl:'./views/upload.html'
        })
        .state('login',{
            url:'/login',
            templateUrl:'./views/login.html'
        })
        .state('register',{
            url:'/register',
            templateUrl:'./views/register.html'
        })

        /*The custom “X-Requested-With” is a conventional header sent by browser clients,
        and it used to be the default in Angular but they took it out in 1.3.0. Spring Security
         responds to it by not sending a “WWW-Authenticate” header in a 401 response, and thus
         the browser will not pop up an authentication dialog (which is desirable in our app
         since we want to control the authentication).*/
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    
})