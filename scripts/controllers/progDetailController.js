'use strict';

/**
 * @ngdoc function
 * @name planprogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the planprogApp
 */
angular.module('planprogApp')
  .controller('progDetailController', ['$scope', '$stateParams', 'dbprogramas', 'dbindicadores', function($scope, $stateParams, dbprogramas, dbindicadores) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
    $scope.showprograma = false;
    $scope.message = "Cargando ...";
    dbprogramas.getprogramas().get({id: $stateParams.id})
    .$promise.then(
                function(response) {
                    console.log(response.rows)
                    $scope.programa = response.rows[0];
                    console.log("Bien")
                    $scope.showprograma = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });
    

    $scope.showindic = false;
    $scope.message = "Cargando ...";
    dbindicadores.getindicadores().get({id: $stateParams.id})
    .$promise.then(
                function(response) {
                    console.log(response.rows)
                    $scope.indicadores = response.rows;
                    console.log("Bien indicadores")
                    $scope.showindic = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });

  }]);