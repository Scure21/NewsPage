angular.module('newsPage')
    .controller('navCtrl', navCtrl);

function navCtrl($scope, $mdSidenav) {
    $scope.currentNavItem = 'page1';

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        }
    }
}
