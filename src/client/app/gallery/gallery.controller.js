(function() {
    'use strict';

    angular.module('ganalytics')
        .controller('GalleryController', GalleryController);

    /*****
     * @ngInject
     *****/
    function GalleryController(picsSimple, $q, $rootScope, $state) { /* $mdSidenav, was a service injected */
        var vm = this;
        vm.state = $state;

        activate();

        ////////

        function activate() {
            getInitialGallery();
            changeGallery();
        }


        // TODO:  write proper js doc
        function getInitialGallery() {

            if (vm.state.current.name === "gallery.all") {
                //set proper small hero
                vm.isAll = true;
                //get proper gallery images
                picsSimple.getAll()
                    .then(function(data) {
                        vm.picsList = data.all;
                    });
            } else if (vm.state.current.name === "gallery.silicon-valley") {
                vm.isSilicon = true;
                picsSimple.getSilicon()
                    .then(function(data) {
                        vm.picsList = data;
                    });
            } else if (vm.state.current.name === "gallery.cheeky") {
                vm.isCheeky = true;
                picsSimple.getCheeky()
                    .then(function(data) {
                        vm.picsList = data;
                    });
            } else {
                // e.g. if just state gallery
                // set proper small hero
                vm.isAll = true;
                //get proper gallery images
                picsSimple.getAll()
                    .then(function(data) {
                        vm.picsList = data.all;
                    });
            }
        }


        //  TODO:  write proper js docs
        function changeGallery() {

            $rootScope.$on('$stateChangeStart', function(event, toState) {
                switch (toState.name) {
                    case "gallery":
                        //set proper small hero
                        vm.isSilicon = false;
                        vm.isCheeky = false;
                        vm.isAll = true;
                        //get proper gallery images
                        picsSimple.getAll()
                            .then(function(data) {
                                vm.picsList = data.all;
                            });
                        break;
                    case "gallery.all":
                        vm.isSilicon = false;
                        vm.isCheeky = false;
                        vm.isAll = true;
                        picsSimple.getAll()
                            .then(function(data) {
                                vm.picsList = data.all;
                            });
                        break;
                    case "gallery.silicon-valley":
                        vm.isSilicon = true;
                        vm.isCheeky = false;
                        vm.isAll = false;
                        console.log(vm.isSilicon);
                        picsSimple.getSilicon()
                            .then(function(data) {
                                vm.picsList = data;
                            });
                        break;
                    case "gallery.cheeky":
                        vm.isCheeky = true;
                        vm.isSilicon = false;
                        vm.isAll = false;
                        picsSimple.getCheeky()
                            .then(function(data) {
                                vm.picsList = data;
                            });
                        break;
                    default:
                        vm.isSilicon = false;
                        vm.isCheeky = false;
                        vm.isAll = true;
                        picsSimple.getAll()
                            .then(function(data) {
                                vm.picsList = data.all;
                            });

                }
            });

        }

    }

})();
