(function () {
  'use strict';

  angular
    .module('ganalytics.siteContent')
    .config(stateConfig);


    /**
     * @ngInject
     **/
    function stateConfig($stateProvider) {
      /*****
       * routes for site/core/main content pages
       *****/

       $stateProvider
        .state('home', {
          url: '/home',
          views: {
            maincontent: {
              templateUrl:  'app/site-content/partials/home.html',
            }
          }
        })
        .state('discover', {
          url: '/discover',
          views: {
            maincontent: {
              templateUrl: 'app/site-content/partials/discover.html',
            }
          }
        })
        .state('how-it-works', {
          url: '/how-it-works',
          views: {
            maincontent: {
              templateUrl: 'app/site-content/partials/how-it-works.html',
            }
          }
        })
        .state('groups', {
          url: '/groups',
          views: {
            maincontent: {
              templateUrl: 'app/site-content/partials/groups.html',
            }
          }
        })
        .state('custom', {
          url: '/custom',
          views: {
            maincontent: {
              templateUrl: 'app/site-content/partials/custom.html',
            }
          }
        })
        .state('contact', {
          url: '/contact',
          views: {
            maincontent: {
              templateUrl: 'app/site-content/partials/contact.html',
            }
          }
        });



    }
})();
