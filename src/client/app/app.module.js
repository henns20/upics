(function () {

'use strict';

  /*****
   * @ngInject
   *****/
  angular
    .module('ganalytics', [
      'ngAnimate',
      'ngMaterial',
      'ngAria',
      'ui.router',
      'ngResource',
      'my.angular.material',
      'ganalytics.layout',
      'ganalytics.core',
      'ganalytics.siteContent'
    ])
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
            //  $locationProvider.html5Mode({
            //     enabled: true
            //     // requireBase: false
            //  });
            //

            // another way to try to fix scroll top issue did not work for me
            // http://stackoverflow.com/questions/22290570/angular-ui-router-scroll-to-top-not-to-ui-view
      // $provide.decorator('$uiViewScroll', function ($delegate) {
      //   return function (uiViewElement) {
      //     var top = uiViewElement.getBoundingClientRect().top;
      //     window.scrollTo(0, (top - 30));
      //     // Or some other custom behaviour...
      //   };
      // });

    }])

  })();
