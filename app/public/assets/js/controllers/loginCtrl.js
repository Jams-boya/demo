//商铺菜单控制器:加载瀑布流图片模块
define(['app'], function(app) {
	app.controller('loginCtrl', ['$scope', '$rootScope', '$http', '$routeParams', function($scope, $rootScope, $http, $routeParams) {
		$rootScope.headTitle = $rootScope.title = "登 录";
		//显示返回按钮
		$rootScope.backBol = true;
		//所有的列表页面都不显示收藏按钮
		$rootScope.favBol = false;
		$scope.username="";
		$scope.password="";
		$scope.login = function() {
			var d=$.param({ user: $scope.username, pass: $scope.password});
			$http({
				method: 'POST',
				url: 'login',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				data: d
			}).then(function successCallback(response) {
				console.log(response);
				if(response.data.state=="success") {
					location.assign("#/home");
				} else {
					alert("用户名或密码错误");
				}
			}, function errorCallback(response) {
				alert("系统繁忙，请稍后再试");
			});
		}
	}])
})