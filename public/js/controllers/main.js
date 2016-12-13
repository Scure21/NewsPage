angular.module('newsPage', [])

    // inject the Todo service factory into our controller
    .controller('mainController', ['$scope', '$http', function ($scope, $http) {
        $scope.test = function () {
            console.log("isWorking!!!");
        }
    }]);