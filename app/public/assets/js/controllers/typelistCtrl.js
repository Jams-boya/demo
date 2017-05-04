//商铺详情控制器:加载电话框模块
define(['app'], function(app){
      
    app.controller('typelistCtrl', ['$scope','$rootScope','$http','$sce','$routeParams', function ($scope,$rootScope,$http,$sce,$routeParams) {
            //index.html的<title>{{headTitle}}</title>
            $rootScope.headTitle = $rootScope.title = "加意新品";
             //所有的列表页面都不显示收藏按钮
            $rootScope.favBol = true;
            $rootScope.backBol = true;
            
              $scope.boxShow = false;
                  $scope.toggleShow = function() {
                    $scope.boxShow = !$scope.boxShow;
              };
        }])

})