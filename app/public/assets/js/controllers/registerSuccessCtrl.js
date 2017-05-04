define(['app'], function(app) {
	app.controller('registerSuccessCtrl', ['$scope', '$rootScope', '$http', '$routeParams', function($scope, $rootScope, $http, $routeParams) {
		$rootScope.headTitle = $rootScope.title = "恭 喜";
		//显示返回按钮
		$rootScope.backBol = true;
		//所有的列表页面都不显示收藏按钮
		$rootScope.favBol = false;
	}])
})