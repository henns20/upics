(function () {
  'use strict';

  angular
    .module('ganalytics')
    .factory('picsSimple', picsSimple);

  function picsSimple($http, $q) {
    return {
      getAll: getAll,
      getSilicon: getSilicon,
      getCheeky: getCheeky,
      testf: testf
    };
    function testf() {
      return "fred";
    }
    function getAll() {
      return httpPromise('./assets/mock-data/pics-data-mock-hc/picsoptions.json');
    }

    function getSilicon(){
      // return httpPromise('./assets/mock-data/pics-data-mock-hc/picsoptions.json');
      // return httpPromise('jamie');

      var siliconPics1;
      var deferred = $q.defer();
        getAll()
        .then(function (data) {
          console.log(data, "getsilicon");
          var allCategories = data.all;

          siliconPics1 = allCategories.filter(function (obj) {
          return obj.category  === "silicon valley";
          });

          deferred.resolve(siliconPics1);
        });
          return deferred.promise;
      }
    function getCheeky(){
      // return httpPromise('./assets/mock-data/pics-data-mock-hc/picsoptions.json');
      // return httpPromise('jamie');

      var cheekyPics;
      var deferred = $q.defer();
        getAll()
        .then(function (data) {
          console.log(data, "getCheeky");
          var allCategories = data.all;

          cheekyPics = allCategories.filter(function (obj) {
          return obj.category  === "cheeky";
          });

          deferred.resolve(cheekyPics);
        });
          return deferred.promise;
      }



    /**
     * httpPromise - helper to make service functions return a promise to use in controller*
     *
     * @param  {string} url description
     * @return {promise}     description
     */
    function httpPromise(url) {
      var deferred = $q.defer();
      $http.get(url)
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function () {
          deferred.reject();
        });
      return deferred.promise;
    }

  }
})();
