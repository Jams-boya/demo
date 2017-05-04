/**
 * 路由
 */
define(['app'], function(app){
   return app.config(['$routeProvider',function($routeProvider) {
            $routeProvider
              .when('/home', {//默认进入首页
                templateUrl: 'views/main.html',
                controller: 'mainCtrl'
              })
              .when('/typelist', {//进入分类页面
                templateUrl: 'views/typelist.html',
                controller: 'typelistCtrl'
              })
              .when('/basket', {//进入购物车页
                templateUrl: 'views/basket.html',
                controller: 'basketCtrl'
              })
              .when('/login', {//进入登录页
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
              })
              .when('/register', {//进入注册页
                templateUrl: 'views/register.html',
                controller: 'registerCtrl'
              })
              .when('/registerSuccess', {//进入注册页
                templateUrl: 'views/registerSuccess.html',
                controller: 'registerSuccessCtrl'
              })
              .otherwise({ redirectTo: '/home' });
              //$locationProvider.html5Mode(true).hashPrefix('!');
   }])
})