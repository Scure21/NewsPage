angular.module('newsPage')
    .controller('navCtrl', navCtrl);

function navCtrl($scope) {
    $scope.currentNavItem = 'page1';
}
