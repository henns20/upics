(function () {
  angular
  .module('ganalytics')
  .controller('GallerySnapshotController', GallerySnapshotController);

  function GallerySnapshotController(photographersService) {
    var vm = this;

    photographersService.then(function (data) {
      vm.test = data;
      console.log(data.data.results);
      vm.testImages = [];
      for ( i = 0; i <= vm.test.data.results.length; i += 1) {
      vm.testImages.push(vm.test.data.results[i].picture.medium);
    }
    });
  }
  

})();
