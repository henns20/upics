/**
 * Created by john on 11/4/15.
 *  params:{picsId: 'picsoptions'}
 */
angular.module('ganalytics')
  .factory('pictureService', function($resource) {
    return $resource('./assets/mock-data/pics-data-mock-hc/:picsId.json', {}, {
      query: {method: 'GET', isArray:true}
    });
  });
