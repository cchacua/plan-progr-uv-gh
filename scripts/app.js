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
    
    // Ruta para la página de inicio
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
    
    // Ruta para la página de detalles del programa
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

/*****************************INICIO VISUALIZACIONES***************************/
    
    // Ruta para la página de visualizaciones
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
    
    // route for visualizaciones / resolución corta
    .state('app.visualizaciones.rescorta', {
                url:'/resolucioncorta',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/resocorta.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
    // Ruta para la página Indicadores por programa
    .state('app.visualizaciones.indi-pro', {
                url:'/indi-pro',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/indi-pro.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
    // Ruta para la página Indicadores por programa, con valores de los indicadores
    .state('app.visualizaciones.indi-pro-values', {
                url:'/indi-pro-values',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/indi-pro-values.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
        // Ruta para la página Programas, objetivos e indicador con valore
    .state('app.visualizaciones.progr-prop-indi-values', {
                url:'/progr-prop-indi-values',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/progr-prop-indi-values.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    // Ruta para la página programas y responsables
    .state('app.visualizaciones.pro-resp', {
                url:'/pro-resp',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/pro-resp.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
    // Ruta para la página Eje, estrategia, programa, indicador
    .state('app.visualizaciones.eje-est-prog-ind', {
                url:'/eje-est-prog-ind',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/eje-est-prog-ind.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
   // Ruta para la página Eje, estrategia, programa, lineamiento, orientación
    .state('app.visualizaciones.eje-est-prog-lin-orie', {
                url:'/eje-est-prog-lin-orie',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/eje-est-prog-lin-orie.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
       // Ruta para la página Eje, estrategia, programa, lineamiento, orientación
    .state('app.visualizaciones.anexo-tecnico', {
                url:'/anexo-tecnico',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/anexo-tecnico.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
  // Ruta para la ficha de indicadores
    .state('app.visualizaciones.fichaindicadores', {
                url:'/fichaindicadores',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/fichaindicadores.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
      // Ruta para la página cinco mesas de trabajo
    .state('app.visualizaciones.mesastrabajo', {
                url:'/mesastrabajo',
                views: {
                    'content@': {
                        templateUrl : 'views/vis/mesastrabajo.html',
                        controller  : 'visualizaciones'                  
                    }
                }
    })
    
/*****************************FIN VISUALIZACIONES***************************/

    // Ruta para la página de Acerca de
    .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/about.html',
                        controller  : 'AboutCtrl'                  
                    }
                }
    });

    $urlRouterProvider.otherwise('/');
    
  });
