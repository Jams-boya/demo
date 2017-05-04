/**
 * 收藏按钮的directive
 */
define(['jquery','app'], function ($,app) {
  	app.directive('favBtn', [function () {
		return {
			restrict: 'AE',
			replace: true,
            template: '<a href="javascript:;" class="btn-fav" ng-show="favBol"><span></span></a>',
			link: function (scope, ele, attr) {
				$(ele).bind("click", function(){
					$(this).toggleClass('btn-fav-select')
				})
			}	
		}
  }])
})
