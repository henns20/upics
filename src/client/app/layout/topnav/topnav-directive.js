(function () {
  'use strict';

  angular
    .module('ganalytics.layout')
    .directive('topnav', directive);

  function directive() {
    return {
      restrict: 'EA',
      templateUrl: 'app/layout/topnav/topnav.html',
      };


  }
})();
