(function(angular) {
    'use strict';

    angular.module('app').controller('MainController', ['$scope', function($scope) {
        var self = $scope;

        self.nav = {
            reduced : false
        };

        self.toggleNav = function() {
            self.nav.reduced = ! self.nav.reduced;
        };

    }]);
})(angular);
