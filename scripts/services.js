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
        
        .factory('Excel',function($window){
        var uri='data:application/vnd.ms-excel;base64,',
            template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
            format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
        return {
            tableToExcel:function(tableId,worksheetName){
                var table=$(tableId),
                    ctx={worksheet:worksheetName,table:table.html()},
                    href=uri+base64(format(template,ctx));
                return href;
            }
        };
         })
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
