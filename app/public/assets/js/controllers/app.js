/**
 * 建立pinganApp模块,需要依赖ngRoute,ngSantitize,ajaxLoading三个模块
 */
define(['angular'], function (angular) {
    var app = angular.module('pinganApp', ['ngRoute','ngSanitize','ajaxLoading']);
    return app;
});
