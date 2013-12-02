var App = angular.module('app');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* AppController - main site controller
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.controller('AppController', function($rootScope, $scope, $http, $routeParams, $location, Utilities) {
    'use strict';

    // scope
    $scope.state = {
    };

    initialize();

    /* getItems -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function initialize() {

        console.log('initialize app controller');
        createEventHandlers();
    }

    /* createEventHandlers -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function createEventHandlers() {

    }
});