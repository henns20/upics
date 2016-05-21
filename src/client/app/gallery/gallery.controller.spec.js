// describe("GalleryController", function () {
//   var controller,
//   vm,
//   $httpBackend,
//   PicsService1,
//   $q,
//   $state,
//   $rootScope,
//   picsSimple,
//   $templateCache;
//
//   var siliconResults = [ {
//       "name": "Snapchat it",
//       "description": "The story of Snapchat is an exciting one",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/evan_snapchat.jpg",
//       "littleImage": "./images/silicon-valley/snapchat-logo-250250.png",
//       "picsId": "snapchat-ceo",
//       "category": "silicon valley"
//     }, {
//       "name": "iExec",
//       "description": "Get a photo inspired by the Apple executive",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/apple-woman-350.png",
//       "littleImage": "./images/silicon-valley/apple-aluminum.png",
//       "picsId": "apple-woman",
//       "category": "silicon valley"
//     }, {
//       "name": "Search Engine Giant",
//       "description": "Get a photo like the Google's management team",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/googleexec.jpg",
//       "littleImage": "./images/silicon-valley/google4.png",
//       "picsId": "search-engine-giant",
//       "category": "silicon valley"
//     }, {
//       "name": "G Ventrified",
//       "description": "A quick creative description of the pic",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/kevin-rose2.jpg",
//       "littleImage": "./images/silicon-valley/gv-logo-icon.png",
//       "picsId": "g-ventrified-1",
//       "category": "silicon valley"
//     }, {
//       "name": "CEO Soft",
//       "description": "CEO Soft is a photo that takes after a",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/nadella_3079372b.jpg",
//       "littleImage": "./images/silicon-valley/msoft-logo.png",
//       "picsId": "ceo-soft",
//       "category": "silicon valley"
//     }, {
//       "name": "Super Web Circuit",
//       "description": "Super web circuit is inspired by Brad Frost",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/brad_frost.png",
//       "littleImage": "./images/silicon-valley/atomic.png",
//       "picsId": "super-web-circuit",
//       "category": "silicon valley"
//     }, {
//       "name": "Yahoo Ceo",
//       "description": "A quick creative description of the pic",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/mmayer-1.jpg",
//       "littleImage": "./images/silicon-valley/yahoo-logo.png",
//       "picsId": "yahoo-ceo",
//       "category": "silicon valley"
//     }, {
//       "name": "G Ventrified 2",
//       "description": "A quick creative description of the pic",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/phoebe-peronto.jpg",
//       "littleImage": "./images/silicon-valley/gv-logo-icon.png",
//       "picsId": "g-ventrified-2",
//       "category": "silicon valley"
//     }, {
//       "name": "Wordpress Hero",
//       "description": "Get a photo like the J. Torke Wordpress development guru.",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/torke-large-1.jpeg",
//       "littleImage": "./images/silicon-valley/wpress.png",
//       "picsId": "wordpress-hero",
//       "category": "silicon valley"
//   }];
//
//   var results =   {
//     "all": [
//         {
//           "name": "Snapchat it",
//           "description": "The story of Snapchat is an exciting one",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/silicon-valley/evan_snapchat.jpg",
//           "littleImage": "./images/silicon-valley/snapchat-logo-250250.png",
//           "picsId": "snapchat-ceo",
//           "category": "silicon valley"
//         },
//         {
//           "name": "iExec",
//           "description": "Get a photo inspired by the Apple executive",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/silicon-valley/apple-woman-350.png",
//           "littleImage": "./images/silicon-valley/apple-aluminum.png",
//           "picsId": "apple-woman",
//           "category": "silicon valley"
//         },
//         {
//           "name": "Search Engine Giant",
//           "description": "Get a photo like the Google's management team",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/silicon-valley/googleexec.jpg",
//           "littleImage": "./images/silicon-valley/google4.png",
//           "picsId": "search-engine-giant",
//           "category": "silicon valley"
//         },
//         {
//           "name": "G Ventrified",
//           "description": "A quick creative description of the pic",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/silicon-valley/kevin-rose2.jpg",
//           "littleImage": "./images/silicon-valley/gv-logo-icon.png",
//           "picsId": "g-ventrified-1",
//           "category": "silicon valley"
//         },
//         {
//           "name": "CEO Soft",
//           "description": "CEO Soft is a photo that takes after a",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/silicon-valley/nadella_3079372b.jpg",
//           "littleImage": "./images/silicon-valley/msoft-logo.png",
//           "picsId": "ceo-soft",
//           "category": "silicon valley"
//         },
//         {
//           "name": "Super Web Circuit",
//           "description": "Super web circuit is inspired by Brad Frost",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/silicon-valley/brad_frost.png",
//           "littleImage": "./images/silicon-valley/atomic.png",
//           "picsId": "super-web-circuit",
//           "category": "silicon valley"
//         },
//         {
//           "name": "Yahoo Ceo",
//           "description": "A quick creative description of the pic",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/silicon-valley/mmayer-1.jpg",
//           "littleImage": "./images/silicon-valley/yahoo-logo.png",
//           "picsId": "yahoo-ceo",
//           "category": "silicon valley"
//         },
//         {
//           "name": "G Ventrified 2",
//           "description": "A quick creative description of the pic",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/silicon-valley/phoebe-peronto.jpg",
//           "littleImage": "./images/silicon-valley/gv-logo-icon.png",
//           "picsId": "g-ventrified-2",
//           "category": "silicon valley"
//         },
//         {
//           "name": "Wordpress Hero",
//           "description": "Get a photo like the J. Torke Wordpress development guru.",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/silicon-valley/torke-large-1.jpeg",
//           "littleImage": "./images/silicon-valley/wpress.png",
//           "picsId": "wordpress-hero",
//           "category": "silicon valley"
//         },
//         {
//           "name": "Iron Chef W",
//           "description": "Cat Kora was the first woman Iron Chefe",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/other-influencers/cat.png",
//           "littleImage": "./images/other-influencers/crossed-knives.jpg",
//           "picsId": "iron-chef-w",
//           "category": "other influencers"
//         },
//         {
//           "name": "Back Stage",
//           "description": "Back Stage is a photo isnpired by...",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/other-influencers/comicbdrop250.jpg",
//           "littleImage": "./images/other-influencers/q-social-media-icon.png",
//           "picsId": "comic-genius",
//           "category": "other influencers"
//         },
//         {
//           "name": "Martha's Assistant",
//           "description": "A quick creative description of the pic",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/other-influencers/marthastewart-mediakit.png",
//           "littleImage": "./images/other-influencers/martha_stewart.png",
//           "picsId": "marthas-assistant",
//           "category": "other influencers"
//         },
//         {
//           "name": "The White Wall",
//           "description": "The white wall is a location that brings out the...",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/smart-locations/elance-whitewall-350.jpg",
//           "littleImage": "",
//           "picsId": "white-wall",
//           "category": "smart locations"
//         },
//         {
//           "name": "In The Subway",
//           "description": "Once a monthe we make a trip to subway you can get... ",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/smart-locations/subway.jpg",
//           "littleImage": "needs-uber",
//           "picsId": "in-the-subway",
//           "category": "smart locations"
//         },
//         {
//           "name": "Market Street Live",
//           "description": "Once a week we pick a live city atmosphere",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/smart-locations/ypn-aaman.jpg  ",
//           "littleImage": "needs-uber",
//           "picsId": "market-street-live",
//           "category": "smart locations"
//         },
//         {
//         "name": "The Nano Center",
//         "description": "Invoke a modern scence and politik with this setting ",
//         "productlink": "../../app/components/product-page/product.html",
//         "profileImage": "./images/smart-locations/ypn-woman-nano.jpg",
//         "littleImage": "needs-uber",
//         "picsId": "nano-center",
//         "category": "smart locations"
//       },
//         {
//           "name": "How to levitate",
//           "description": "Inspired by Louish Pixel from Flickr",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/cheeky/boybluehoving.jpg",
//           "littleImage": "needs-uber",
//           "picsId": "how-to-levitate",
//           "category": "cheeky"
//         },
//         {
//           "name": "Cliffs of Philly",
//           "description": "Inspired by the Cliffs of Dover Pic from...",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/cheeky/cliffsofDover.jpg",
//           "littleImage": "needs-uber",
//           "picsId": "cliffs-of-philly",
//           "category": "cheeky"
//         },
//         {
//           "name": "The Computer Float",
//           "description": "Taken from a col pic that was seen in a commercial",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/cheeky/girlflying.jpg",
//           "littleImage": "needs-uber",
//           "picsId": "computer-float",
//           "category": "cheeky"
//         },
//         {
//           "name": "Too Many Papers",
//           "description": "Ever seen one of those commercials that makes",
//           "productlink": "../../app/components/product-page/product.html",
//           "profileImage": "./images/cheeky/stress_one-913.jpeg",
//           "littleImage": "needs-uber",
//           "picsId": "too-many-papers",
//           "category": "cheeky"
//         }
//
//
//
//
//
//
//
//       ]
//   };
//
//
//
//
//   beforeEach(function () {
//     module('ganalytics');
//   });
//
//   beforeEach(inject(function (_$controller_, _$httpBackend_, _pictureService_, _$q_, _$rootScope_, _$state_, _picsSimple_, _$templateCache_) {
//     $controller = _$controller_;
//     $httpBackend = _$httpBackend_;
//     pictureService = _pictureService_;
//     $q = _$q_;
//     $rootScope = _$rootScope_;
//     $state = _$state_;
//     picsSimple = _picsSimple_;
//     $templateCache = _$templateCache_;
//
//   }));
//
//
//   describe("Gallery controller", function () {
//     it("should be created successfully", function () {
//       vm = $controller('GalleryController', {$state: $state, $rootScope: $rootScope, picsSimple: picsSimple}, {picsList: ''});
//       expect(vm).toBeDefined();
//
//     });
//
//     describe("After activation", function () {
//
//       describe("basic spy on test without promises", function () {
//
//           /**
//            * This shows that the on-functionality works behind the issue must be promises
//            *
//            */
//
//           it("should on the test ffunction and store in vm.test", function () {
//
//             spyOn(picsSimple, 'testf').and.callFake(function () {
//               return "mike";
//             });
//
//             vm = $controller('GalleryController', {$state: $state, $rootScope: $rootScope, picsSimple: picsSimple}, {});
//             expect(vm.test).toEqual("mike");
//           });
//       });
//
//
//       /**
//        * * original describe function
//          + should on 'gallery' state (aka #/gallery site path) call picsSimple.getAll() with on 'gallery' state (aka #/gallery site path) and should store returned value in vm.picsList
//          + realized something and broke it down to this:
//          - to the following that makes more sense - lessens the it and puts it on the it function rather that the describe
//        */
//
//       describe("State 'gallery' (aka #/gallery site path)", function () {
//
//         it("should call picsSimple.getAll() and should store returned value in vm.picsList; also indirectly tests proper view load w/ $templateCashe", function () {
//
//           $templateCache.put('gallery/gallery.html', '');
//
//           /*
//            * question how much should I mock the proper formatted results results?
//            * Is that something for the service to be tested for
//            * The job of the controller function is to call and store whatever is returned, no?
//            * So - as long it shows what ever I return in the spy - that should suffice, no?
//            * In the service part - what is called to the api and what is returned(and modified - in the case of getSilicon() for example) more important, no
//            * for example the vm.picsList (1) needs first to have an array (i think) to work
//            * No True Http Calls: This of course - is in the context - that we are no making network http calls and can't test the info passed - related to true network*(xhr) calls(***)
//            *
//            * (jq)(improve)(issues)
//            * Importan: so here just mimicked the general structure of the data coming in {all:...
//            * + just noticed: that data.all call (jq)(improve) should/can at least in this mock up be don in the service and the proper formatted data can be given to promise in controller
//            *  + Is this a test for state change when in controller already or is it also the proper way to mimic first going to #/gallery path(and GalleryController) not sure this is    showing that get all is really being called on g
//            *  my feeling this tests only $stateChangeStart logic
//            * + spyOn does not work without being inside the if function and using state go combination (which again i dont think it is testing the true behavior of instatiation and there is no reason why spyOn shouldn't work from any logic that i know) (update)see above basic spy on works without promises being in the mix naked in the controller opposed to and more puzzling using the rootscope go on method tracking state change
//            * how to figure out:
//            * + https://www.jonathanfielding.com/combining-promises-angular/  & combo play-by-play code dashboard and dashboard spec
//            * + stack overflow(question: in effect why doesn't picsListEveryValueHere why isn't getAll being called) with the if
//            * - using console log in the call fake and taking out state.go you can tell that it's not been called
//            * + why is spyon not working when I have it out of the if function.
//            * + what the hell is the convention that john papa uses?!
//            * -besides: the promises activationand the use of q.all: he somehow stores mock data outside the testing environment or spec page
//            * -so in other words Mock Data Convention
//            * + this is a testing an application consistency question(because the app actually works meaning get all is called)
//            * - meaning: AGAIN the site works and is acting o can not verify with testing
//            */
//
//           spyOn(picsSimple, 'getAll').and.callFake(function () {
//             dump("this is being called");
//             var deferred = $q.defer();
//             deferred.resolve({'all': ['relevant-pics-array-of-objects']});
//             return deferred.promise;
//           });
//
//           vm = $controller('GalleryController', {$state: $state, $rootScope: $rootScope, picsSimple: picsSimple}, {});
//
//           $state.go('gallery'); // this needs to be here in order for picssimple.getAll to call
//           $rootScope.$apply();
//           expect(vm.picsList).toEqual(['relevant-pics-array-of-objects']);
//
//         });
//
//
//         // it("should load all pics", function () {
//         //     spyOn(picsSimple, 'getAll').and.callFake(function () {
//         //       var deferred = $q.defer();
//         //       deferred.resolve(results);
//         //       return deferred.promise;
//         //     });
//             // var vm;
//             // $this = $controller('GalleryController', {$state: $state, $rootScope: $rootScope, picsSimple: picsSimple}, {ted: 'fred'});
//             // picsSimple.getAll()
//             //  .then(function (data) {
//             //
//             //    $this.picsList = data;
//             //    // console.log(a);
//             //  });
//             // $rootScope.$apply();
//             // expect($this.picsList).toEqual(results.all);
//             //
//             // dump($this.fred);
//             // dump($this.picsList);
//             // dump(picsSimple.getAll);
//             // expect(true).toEqual(true);
//
//         // });
//
//     });
//      describe("silicon vallley category behavior", function () {
//
//        it("should call getSilicon() on stateChangeStart toState 'gallery.silicon-valley' started when user clicks the silicon valley category link", function () {
//
//          spyOn(picsSimple, 'getSilicon').and.callFake(function () {
//            var deferred = $q.defer();
//            // deferred.resolve(siliconResults);
//            deferred.resolve(1);
//            return deferred.promise;
//          });
//
//         vm = $controller('GalleryController', {$state: $state, $rootScope: $rootScope, picsSimple: picsSimple}, {});
//           // dump(angular.mock.dump($state));
//             $templateCache.put('gallery/gallery.html', '');
//
//           //  $rootScope.$on('$stateChangeStart', function (event) {
//            //
//           //
//           //  });
//            $state.go('gallery.silicon-valley');
//            $rootScope.$apply();
//           //  expect(siliconPics2).toEqual(siliconResults);
//            expect(vm.picsList).toEqual(1);
//
//        });
//
//      });
//
//     });
//
//   });
//
// });
