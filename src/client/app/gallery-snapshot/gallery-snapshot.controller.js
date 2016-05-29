(function() {
    angular
        .module('ganalytics')
        .controller('GallerySnapshotController', GallerySnapshotController);

    /*****
     * @ngInject
     *****/
    function GallerySnapshotController(photographersService) {
        var vm = this;
        vm.testImages = [];

        activate();

        //////////

        function activate() {
            photographersService.then(function(data) {
                vm.test = data;
                for (var i = 0; i <= vm.test.data.results.length; i += 1) {
                    vm.testImages.push(vm.test.data.results[i].picture.medium);
                }
            });
        }
    }
})();
