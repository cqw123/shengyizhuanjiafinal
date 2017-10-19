(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
   $scope.title=$stateParams.title;
   $scope.property=$stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      phone:'13163977761',
      createTime:'2017-13-32 25:61:61',
      name:'Chen',
      ab:'whatever',
      boss:'Chen',
      email:'2664918243@qq.com',
      shopPhone:'110'
    });
    $scope.save=function () {
      localStorageService.update('Shop',$scope.shop);
    }
  }])
})()
