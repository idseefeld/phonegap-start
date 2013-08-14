'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
    $scope.code = null;
    $scope.response = null;
    $http.jsonp('http://www.idseefeld.de/phones/phones-2.js?callback=JSON_CALLBACK&test=4').success(function (data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];
