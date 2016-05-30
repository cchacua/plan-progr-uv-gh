'use strict';

/**
 * @ngdoc function
 * @name planprogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the planprogApp
 */
angular.module('planprogApp')
  .controller('visualizaciones', ['$scope', '$stateParams',  'dbprogramas', 'db', function($scope, $stateParams, dbprogramas, db) {
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
                    $scope.programas = response.programas.slice(2, response.programas.length);
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

    $scope.showejes = false;
    db.getejes().get()
    .$promise.then(
                function(response) {
                    $scope.ejes = response.ejes.slice(2, response.ejes.length);
                    $scope.showejes = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });
      
    $scope.showestrategias = false;
    db.getestrategias().get()
    .$promise.then(
                function(response) {
                    $scope.estrategias = response.estrategias.slice(2, response.estrategias.length);
                    $scope.showestrategias = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });
    
    $scope.fecha = new Date().toISOString();
      
}]);
