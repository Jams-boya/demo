//网点详情：加载电话框模块
define(['app'], function(app){
      
    app.controller('basketCtrl', ['$scope','$rootScope','$http','$sce', function ($scope,$rootScope,$http,$sce) {
            //angular默认是开启SCE的,默认隔离不安全的行为,如第三方的脚本库,加载了一段html,避免一些跨站XSS
            
            //index.html的<title>{{headTitle}}</title>
            $rootScope.headTitle = $rootScope.title = "购物车";
             //详情页面显示收藏按钮
            $rootScope.favBol = true;
            //显示返回按钮
            $rootScope.backBol = true;

            // $http.get('./json/wdxq.json').
            //   success(function(data) {

            //     $scope.xq = data;
						// 		//trustAsHtml:意思是信任这个HTML代码
            //     $scope.myHTML = $sce.trustAsHtml($scope.xq.branch_remark);
            //     $scope.branchTel = $scope.xq.branch_tel;
            //     $scope.tels = $scope.branchTel.split(",");
                
            //   });

              $scope.boxShow = false;
              $scope.toggleShow = function() {
                    $scope.boxShow = !$scope.boxShow;
              };


        }])

})