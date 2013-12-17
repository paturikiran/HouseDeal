/**
 * Created by paturik on 12/17/13.
 */

var houseDeal = angular.module('houseDeal',['ui.bootstrap','ui.router']);

houseDeal.config(['$routeProvider',
    function($routeProvider){

        $routeProvider
            // route for the home page
            //when ''/" when you are passing an url of type / or /books /gadgets
            .when('/home', {
                templateUrl: 'Partials/Home.html',
                controller: 'homeCtrl'
            })
            // route for the home page
            //when ''/" when you are passing an url of type / or /books /gadgets
            .when('/add', {
                templateUrl: 'Partials/add.html',
                controller: 'addPropertyCtrl'
            })
            .when('/search', {
                templateUrl: 'Partials/search.html',
                controller: 'searchCtrl'
            })

    }])