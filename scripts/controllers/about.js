'use strict';

/**
 * @ngdoc function
 * @name planprogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the planprogApp
 */
angular.module('planprogApp')
  .controller('AboutCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
