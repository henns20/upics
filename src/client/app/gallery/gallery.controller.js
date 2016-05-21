/**
 * Created by john on 11/3/15.
 */

angular.module('ganalytics')
  .controller('GalleryController', GalleryController);

function GalleryController(picsSimple, $q, $rootScope, $state) { /* $mdSidenav, was a service injected */
    var vm = this;

     /**
      *    getAll is a promise - saves in vm.picsList
      *    get the pics for gallery url(all categories)
      *
      *   if() statement: meant to prevent from getAll being interfering with other states that use the controller
      *   * testing stateChangeStart (w/ state.go) was calling picsSimple.getAll() - unable to tell if was doing it on real stateChangeStart Scenario
      *   * it may have been caused by instantiation of controller in the specific "should call getSilicon() on stateChangeStart toState 'gallery.silicon-valley'..."
      *     test in gallery.controller.spec
      */
      activate();

            function activate() {
                var promises = [picsSimple.getAll(), picsSimple.getSilicon(), picsSimple.getCheeky()];
                return $q.all(promises).then(function() {
                    console.info('Activated Dashboard View');
                });
            }





      if ($state.current.name === "gallery") {
        vm.isAll = "true";
        picsSimple.getAll()
         .then(function (data) {
           console.log(data);
           vm.picsList = data.all;
           // console.log(a);
         });

      }

      if ($state.current.name === "gallery.all") {
        vm.isAll = "true";
        picsSimple.getAll()
         .then(function (data) {
           console.log(data);
           vm.picsList = data.all;
           // console.log(a);
         });

      }

      if ($state.current.name === "gallery.silicon-valley") {
        vm.isSilicon = "true";
        picsSimple.getSilicon()
         .then(function (data) {
           console.log(data);
           vm.picsList = data;
           // console.log(a);
         });
      }
      if ($state.current.name === "gallery.cheeky") {
        vm.isCheeky = "true";
        picsSimple.getCheeky()
         .then(function (data) {
           console.log(data);
           vm.picsList = data;
           // console.log(a);
         });
      }

vm.test = picsSimple.testf();


    $rootScope.$on('$stateChangeStart', function (event, toState) {

      //https://github.com/angular-ui/ui-router/wiki#state-change-events docs for this can(ui.router)
      // if(toState.name === "gallery.silicon-valley")  // switch case


      /**
       * switch - switches the gallery content according to it's corresponding state
       *
       * @param  {expression} toState.name name of state being changed to
       * @return {type} na: sets controllers picslist value for ngrepeat in gallery(catalog of pic options)
       */
      switch (toState.name) {
        case "gallery":
        vm.isSilicon = false;
        vm.isCheeky = false;
        vm.isAll = true;
          picsSimple.getAll()
           .then(function (data) {
             vm.picsList = data.all;
           });
          break;
        case "gallery.all":
        vm.isSilicon = false;
        vm.isCheeky = false;
        vm.isAll = true;
          picsSimple.getAll()
           .then(function (data) {
             vm.picsList = data.all;
           });
          break;
        case "gallery.silicon-valley":
            vm.isSilicon = true;
            vm.isCheeky = false;
            vm.isAll = false;
          console.log(vm.isSilicon);
          picsSimple.getSilicon()
           .then(function (data) {
           vm.picsList = data;
           });
          break;
        case "gallery.cheeky":
            vm.isCheeky = true;
            vm.isSilicon = false;
            vm.isAll = false;
          picsSimple.getCheeky()
           .then(function (data) {
           vm.picsList = data;
           });
          break;
        default:
          vm.isSilicon = false;
          vm.isCheeky = false;
          vm.isAll = true;
          picsSimple.getAll()
           .then(function (data) {
             vm.picsList = data.all;
             // console.log(a);
           });


      }




    });






  // vm.myFilter = {category: "silicon valley"};
  // vm.picsList  = pictureService.query({picsId: 'picsoptions'});
  // //  pictureService.query().
  // //   then(function(data) {
  // //     vm.picsList = data;
  // //   });
  // console.log(vm.picsList);
}
