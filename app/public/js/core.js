angular.module('newsPage', ['ui.router', 'ui.router.router', 'ngMaterial', 'ngMessages'])
    .config(function ($stateProvider, $urlRouterProvider) {
        var homeState = {
            name: 'Home',
            url: '/home',
            templateUrl: 'views/news.html'
        }

        var aboutState = {
            name: 'About',
            url: '/about',
            templateUrl: 'views/about.html'
        }

        var contactState = {
            name: 'Contact',
            url: '/contact',
            templateUrl: 'views/contact.html'
        }

        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);
        $stateProvider.state(contactState);

        $urlRouterProvider.otherwise('/');

        // Example of using function rule as param
        $urlRouterProvider.otherwise(function ($injector, $location) {
            return '/home';
        });
    });

