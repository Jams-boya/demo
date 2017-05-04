/**
 * 拦截器 全局$http注入loading效果:对应用内所有的 XHR 请求进行统一处理
 */
define(['jquery','angular'], function($,angular){
	
//	可以用于如下几个方面:
//	全局处理错误
//	统一进行身份验证一类的处理
//	对所有发出去的请求进行预处理
//	对所有收到的响应进行预处理
//	做一些增强用户体验的操作，例如显示一个进度条
      
    angular.module('ajaxLoading', [])
 
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('loadingInterceptor');
    })
     
    .directive('loading', function() {
      return {
        replace: true,
        restrict: 'AE',
        template:'<div class="back-layer"><div class="loading">'
                +'<img src="images/729.GIF">'
                +'</div></div>',
        link: function($scope, $element, attrs) {
            var top = $(window).height()/2 - 25;
            var left = $(window).width()/2 - 25;
            $('.loading').css({
              top: top,
              left: left
            });
            //$(tpl).appendTo('body');
        }
      };
    })
     
      //定义一个 Service ，将把它作为 Interceptors 的处理函数
    .factory('loadingInterceptor', function($q, $rootScope) {
      return {
        request: function(config) {
        	//接收一个参数,此时可以添加各类身份验证信息，同时也可在此启动进度条
          $(".back-layer").show();
          return config || $q.when(config);
        },
        response: function(response) {
        	//接受一个请求对象参数，可以不处理就直接返回，此时也可以将进度条显示为成功完成
          $(".back-layer").hide();
          return response || $q.when(response);
        },
        responseError: function(rejection) {
        	//可以处理标准的 Http 错误，如服务器没有响应时
          $(".back-layer").hide();
          console.info(rejection.status);
          if(-1 === rejection.status) {
	        // 远程服务器无响应
	      } else if(500 === rejection.status) {
	        // 处理各类自定义错误
	      } else if(501 === rejection.status) {
	        // ...
	      }
          return $q.reject(rejection);
        }
      };
    });

})