(function () {

  'use strict';

  angular
    .module('ganalytics.core')

    /*****
     * @ngInject
     *****/
    .run(function ($rootScope) {

      /**
       * @desc fixes following issue: when clicking through to another page
       * it places visitor at the same document y location. E.G. Click a link
       * when scrolled halfway down document, ended up scrolled down on page
       * navigating to, and not at the top.
       */
      $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });

    });

})();
