(function () {
   'use strict';

   angular
    .module('ganalytics')
    .config(stateConfig);

   function stateConfig ($stateProvider) {
      $stateProvider
        .state('gallery', {
        url: '/gallery',
        views: {
          maincontent: {
            templateUrl: 'app/gallery/gallery.html'
          }
        }
      })
      .state('gallery.all', {
        url: '/all',
        
        views: {
          maincontent: {
            templateUrl: 'app/gallery/gallery.html'
          }
        }
      })
      .state('gallery.silicon-valley', {
        url: '/silicon-valley',
        views: {
          maincontent: {
            templateUrl: 'app/gallery/gallery.html'
          }
        }
      })
      .state('gallery.cheeky', {
         url: '/cheeky',
         views: {
           maincontent: {
             templateUrl: 'app/gallery/gallery.html'
           }
         }
       });

   }
})();
