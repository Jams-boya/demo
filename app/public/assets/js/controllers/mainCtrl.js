
define(['app', 'geoFactory'], function (app, geoFactory) {
  return app.controller('mainCtrl', ['$scope', '$rootScope', '$http', 'geoFactory',
    function ($scope, $rootScope, $http, geoFactory) {
      //index.html的<title>{{headTitle}}</title>
      $rootScope.headTitle = $rootScope.title = "加意新品";
      //所有的列表页面都不显示收藏按钮
      $rootScope.favBol = false;
      //返回按钮
      $rootScope.backBol = false;
      //获取更多网点
      $scope.getMore = function () {
        //获取为一个JQ对象，前提是要引入JQuery
        angular.element('.list-box ul').append('<p>营业网点......</p>')
      }
      //加载营业网点JSON数据
      $scope.branchs = [];
    }
  ])
})