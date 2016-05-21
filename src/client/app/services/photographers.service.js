(function () {
  'use strict';

  angular
    .module('ganalytics')
    .factory('photographersService', photographersService);

  function photographersService ($http) {
    return $http({
      method: 'GET',
      url: 'https://randomuser.me/api/?results=11',
      success: function(data){
        console.log(data);
  },


});
  }
})();
