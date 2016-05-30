'use strict';

/**
 * @ngdoc overview
 * @name planprogApp
 * @description
 * # planprogApp
 *
 * Main module of the application.
 */
angular
  .module('planprogApp', [
    'ngResource',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    // route for the home page
    .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/main.html',
                        controller  : 'MainCtrl'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

    })
    
    // route for the program details
            .state('app.progdetails', {
                url: 'prog/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/progdetail.html',
                        controller  : 'progDetailController'
                   }
                }
            })
    // route for listado de programas
    .state('app.listprogramas', {
                url:'prog',
                views: {
                    'content@': {
                        templateUrl : 'views/listprogramas.html',
                        controller  : 'listprogramas'                  
                    }
                }
    })
    
    // route for visualizaciones
    .state('app.visualizaciones', {
                url:'vis',
                views: {
                    'content@': {
                        templateUrl : 'views/visualizaciones.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
    // route for visualizaciones / resolución
    .state('app.visualizaciones.res', {
                url:'/reso',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/reso.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
    // Indicadores por programa
    .state('app.visualizaciones.indi-pro', {
                url:'/indi-pro',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/indi-pro.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
    // route for the aboutus page
    .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/about.html',
                        controller  : 'AboutCtrl'                  
                    }
                }
    });
    /**
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
      **/
    $urlRouterProvider.otherwise('/');
    
  });
