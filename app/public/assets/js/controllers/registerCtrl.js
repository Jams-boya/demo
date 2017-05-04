define(['app'], function(app) {
	app.controller('registerCtrl', ['$scope', '$rootScope', '$http', '$routeParams', function($scope, $rootScope, $http, $routeParams) {
		$rootScope.headTitle = $rootScope.title = "注 册";
		//显示返回按钮
		$rootScope.backBol = true;
		//所有的列表页面都不显示收藏按钮
		$rootScope.favBol = false;
		$scope.username="";
		$scope.password1="";
		$scope.password2="";
		
		$scope.signup = function() {
			console.log("register...");
			var d=$.param({ user: $scope.username, pass: $scope.password1});
			$http({
				method: 'POST',
				url: 'register',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				data: d
			}).then(function successCallback(response) {
				console.log(response);
				if(response.data.state=="success") {
					location.assign("#/registerSuccess");
				} else {
					alert("系统繁忙，请稍后再试");
				}
			}, function errorCallback(response) {
				alert("系统繁忙，请稍后再试");
			});
		}
	}])
})