(function () {
  'use strict';

  angular
    .module('ganalytics.layout')
    .directive('shell', directive);

  function directive() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'layout/shell/shell.html',
    };

    return directive;

  }
})();
