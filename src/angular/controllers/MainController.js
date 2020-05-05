(function(angular) {
    'use strict';
    angular.module('app').controller('MainController', ['$scope', function($scope) {
        $scope.hello = 'Hello ...';
    
        $scope.test = function() {
            $scope.hello = 'Hello world !';
        };
    }]);
})(angular);
