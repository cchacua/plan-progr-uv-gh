'use strict';

/**
 * @ngdoc function
 * @name planprogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the planprogApp
 */
angular.module('planprogApp')
  .controller('progDetailController', ['$scope', '$stateParams',  'dbprogramas', 'db', function($scope, $stateParams, dbprogramas, db) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.idprograma = $stateParams.id
    $scope.showprogramas = false;
    $scope.message = "Cargando ...";
    dbprogramas.getprogramas().get()
    .$promise.then(
                function(response) {
                    $scope.programas = response.programas;
                    $scope.showprogramas = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });
      
    $scope.showindic = false;
    db.getindicadores().get()
    .$promise.then(
                function(response) {
                    $scope.indicadores = response.indicadores;
                    $scope.showindic = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });
  }]);
