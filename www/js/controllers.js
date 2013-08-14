'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
    $scope.code = null;
    $scope.response = null;
    $http.jsonp('http://dseefeld65.dyndns.org/phone.aspx?callback=JSON_CALLBACK&test=x123').success(function (data) {
        $scope.phones = data;
    }).error(function (data, status, headers, config) {
        $scope.configUrl = config.url;
    });

    $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];
