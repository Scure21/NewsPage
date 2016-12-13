var app = angular.module('newsPage',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/index.html"
    })
    .when("/about", {
        templateUrl : "views/about.html"
    })
    .when("/contact", {
        templateUrl : "views/contact.html"
    })
});

