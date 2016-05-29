(function() {
    'use strict';

    angular.module('ganalytics')
        /*****
         * @ngInject
         *****/
        .controller('PicsDetailCtrl', function($stateParams, picDetailService, photographersService) {
            var vm = this;
            vm.testImages = [];

            activate();

            //////////

            function activate() {
                getPicDetails();
                getPhotographers();
                console.log('activate');
            }

            function getPicDetails() {
                picDetailService.get({
                    picsId: $stateParams.picsId
                }, function(pic) {
                    vm.name = pic.name;
                    vm.imageUrl = pic.imageUrl;
                });
            }

            function getPhotographers() {
                photographersService.then(function(data) {
                    vm.test = data;
                    for (var i = 0; i < vm.test.data.results.length; i += 1) {
                        vm.testImages.push(vm.test.data.results[i].picture.large);
                    }
                });
            }
        });

})();
