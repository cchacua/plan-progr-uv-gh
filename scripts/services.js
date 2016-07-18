'use strict';

angular.module('planprogApp')
        //https://script.google.com/macros/s/AKfycbyfC9f5VjPtYnA33HKIsu8JlERAo_A_IQZRBSOirLKHwmvQ9SY/exec?id=SPREADSHEETKEYID&sheet=SHEETNAME
        //1y8sOqCW-Fcd7pQlHeZYge-wKoC40W7pHZ1PqJjRDCoU
        .constant("baseURL","https://script.google.com/macros/s/AKfycbyfC9f5VjPtYnA33HKIsu8JlERAo_A_IQZRBSOirLKHwmvQ9SY/exec?id=1y8sOqCW-Fcd7pQlHeZYge-wKoC40W7pHZ1PqJjRDCoU")
        .service('dbprogramas', ['$resource', 'baseURL', function($resource,baseURL) {
    
    
                this.getprogramas = function(){
                    return $resource(baseURL+"&sheet=programas",null);
                };
                        
        }])

        .service('db', ['$resource', 'baseURL', function($resource,baseURL) {
    

            this.getindicadores = function(){
                    
                return $resource(baseURL+"&sheet=indicadores",null);
            };
                
            this.getejes = function(){
                return $resource(baseURL+"&sheet=ejes",null);
            };
            
            this.getestrategias = function(){
                return $resource(baseURL+"&sheet=estrategias",null);
            };
                
            this.getprogramas = function(){
                return $resource(baseURL+"&sheet=programas",null);
            };
            
            this.getindicadores = function(){
                    return $resource(baseURL+"&sheet=indicadores",null);
            };
            
            this.getlineamientos = function(){
                return $resource(baseURL+"&sheet=lineamientos",null);
            };
            
            this.getorientaciones = function(){
                return $resource(baseURL+"&sheet=orientaciones",null);
            };
            
            this.getresponsables = function(){
                return $resource(baseURL+"&sheet=responsables",null);
            };
            
        this.getmesas = function(){
                return $resource(baseURL+"&sheet=mesas",null);
            };
                        
        }])

/**
        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var corpfac = {};

            corpfac.getLeaders = function(){
                return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
                };

            return corpfac;
    
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var feedfac = {};

            feedfac.getFeedback = function(){
                return $resource(baseURL+"feedback/:id",null,  {'update':{method:'PUT' }});
                };

            return feedfac;
    
        }])

;
**/
