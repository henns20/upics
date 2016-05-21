/**
 * Created by john on 8/18/15.
 */
angular.module('ganalytics')
  .controller('PicsDetailCtrl',  function($scope, $stateParams, pictureService, photographersService) {
    pictureService.get({picsId: $stateParams.picsId}, function(pic) {
      $scope.name = pic.name;
      $scope.imageUrl = pic.imageUrl;

    });

    photographersService.then(function (data) {
      $scope.test = data;
      console.log(data.data.results);
      $scope.testImages = [];
      for ( i = 0; i <= $scope.test.data.results.length; i += 1) {
      $scope.testImages.push($scope.test.data.results[i].picture.large);
    }
    });
});
