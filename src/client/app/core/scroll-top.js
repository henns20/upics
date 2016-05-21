(function () {

  'use strict';

  angular
    .module('ganalytics.core')

    /*****
     * @ngInject
     *****/
    .run(function ($rootScope) {

      /**
       * TODO: clean this description
       * @desc positions scroll at the top when clicking
       * through links when down the page on site content pages
       * default behavior: position scrollbar exact same
       *  y position on the click through page...
       */
      $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });

    });

})();
