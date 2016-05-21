(function () {
   'use strict';

   angular
    .module('ganalytics')
    .config(stateConfig);

   function stateConfig ($stateProvider) {
     $stateProvider.state('sandbox', {
        url: '/sandbox',
        views: {
          main_content: {
            templateUrl: 'sandbox/sandbox.html',
          }
        }
     });
   }
})();
