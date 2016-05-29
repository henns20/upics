(function() {
    'use strict';

    angular.module('ganalytics')
        /*****
         * @ngInject
         *****/
        .factory('picDetailService', function($resource) {
            return $resource('./assets/mock-data/pics-data-mock-hc/:picsId.json', {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        });

})();
