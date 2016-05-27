'use strict';

angular.module('planprogApp')
        //http://gsx2json.com/api?id=SPREADSHEET_ID&sheet=SHEET_NUMBER&q=QUERY
        .constant("baseURL","http://gsx2json.com/api?id=1y8sOqCW-Fcd7pQlHeZYge-wKoC40W7pHZ1PqJjRDCoU")
        .service('dbprogramas', ['$resource', 'baseURL', function($resource,baseURL) {
    
    
                this.getprogramas = function(){
                    
                    return $resource(baseURL+"&sheet=2"+"&q=:id",null,  {'update':{method:'GET' }});
                    
                };
                        
        }])

        .service('dbindicadores', ['$resource', 'baseURL', function($resource,baseURL) {
    

                this.getindicadores = function(){
                    
                    return $resource(baseURL+"&sheet=1"+"&q=:id",null,  {'update':{method:'GET' }});
                    
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