(function () {

'use strict';
  // TODO:  check core module in play-by-play to see if should inject all dependencies in their as well as the routes below
  /*****
   * @ngInject
   *****/
  angular
    .module('ganalytics', [
      'ganalytics.components',
      'ganalytics.core',
      'ganalytics.layout',
      'ganalytics.siteContent',
      'ngAnimate',
      'ngMaterial',
      'ngAria',
      'ui.router',
      'ngResource'
    ])
    /*****
     * @ngInject
     *****/
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$provide',
            function($stateProvider, $urlRouterProvider, $locationProvider, $provide) {
              $stateProvider
                .state('otherwise', {
                  url: '/',
                  views: {
                    maincontent: {
                      templateUrl: './home/home.html'
                    }
                  }
                });

              $urlRouterProvider.otherwise('/home');

              // TODO:  resolve this, should use or delete
              //  $locationProvider.html5Mode({
              //     enabled: true
              //     // requireBase: false
              //  });
    }]);

  })();
