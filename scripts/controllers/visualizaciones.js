'use strict';

/**
 * @ngdoc function
 * @name planprogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the planprogApp
 */
angular.module('planprogApp')
  .controller('visualizaciones', ['$scope', '$stateParams', 'db','Excel','$timeout', function($scope, $stateParams, db, Excel, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
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
      
    $scope.idprograma = $stateParams.id
    $scope.showprogramas = false;
    $scope.message = "Cargando ...";
    db.getprogramas().get()
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

    $scope.showlineamientos = false;
    db.getlineamientos().get()
    .$promise.then(
                function(response) {
                    $scope.lineamientos = response.lineamientos.slice(2, response.lineamientos.length);
                    $scope.showlineamientos = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });
    
    $scope.showresponsables = false;
    db.getresponsables().get()
    .$promise.then(
                function(response) {
                    $scope.responsables = response.responsables.slice(2, response.responsables.length);
                    $scope.showresponsables = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });
    
  $scope.showmesas = false;
    db.getmesas().get()
    .$promise.then(
                function(response) {
                    $scope.mesas = response.mesas.slice(2, response.mesas.length);
                    $scope.showmesas = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
    });
      
    $scope.fecha = new Date().toISOString();

    $scope.exportToExcel=function(tableId){
        var exportHref=Excel.tableToExcel(tableId,'report');
        var a = document.createElement('a');
        a.href = exportHref;
        a.download = 'Plan UV.xls';
        a.click();
    }
      
}]);
