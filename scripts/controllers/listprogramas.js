'use strict';

/**
 * @ngdoc function
 * @name planprogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the planprogApp
 */
angular.module('planprogApp')
  .controller('listprogramas', ['$scope', '$stateParams',  'dbprogramas', function($scope, $stateParams, dbprogramas) {
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
  }]);
