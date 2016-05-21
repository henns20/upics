// describe("pics simple service", function () {
//   var picsSimple,
//     $httpBackend,
//     $q;
//
//   var allPics = {
//     "all": [
//     {
//       "name": "Snapchat it",
//       "description": "The story of Snapchat is an exciting one",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/evan_snapchat.jpg",
//       "littleImage": "./images/silicon-valley/snapchat-logo-250250.png",
//       "picsId": "snapchat-ceo",
//       "category": "silicon valley"
//     },
//     {
//       "name": "iExec",
//       "description": "Get a photo inspired by the Apple executive",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/apple-woman-350.png",
//       "littleImage": "./images/silicon-valley/apple-aluminum.png",
//       "picsId": "apple-woman",
//       "category": "silicon valley"
//     },
//     {
//       "name": "Search Engine Giant",
//       "description": "Get a photo like the Google's management team",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/googleexec.jpg",
//       "littleImage": "./images/silicon-valley/google4.png",
//       "picsId": "search-engine-giant",
//       "category": "silicon valley"
//     },
//     {
//       "name": "G Ventrified",
//       "description": "A quick creative description of the pic",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/kevin-rose2.jpg",
//       "littleImage": "./images/silicon-valley/gv-logo-icon.png",
//       "picsId": "g-ventrified-1",
//       "category": "silicon valley"
//     },
//     {
//       "name": "CEO Soft",
//       "description": "CEO Soft is a photo that takes after a",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/nadella_3079372b.jpg",
//       "littleImage": "./images/silicon-valley/msoft-logo.png",
//       "picsId": "ceo-soft",
//       "category": "silicon valley"
//     },
//     {
//       "name": "Super Web Circuit",
//       "description": "Super web circuit is inspired by Brad Frost",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/brad_frost.png",
//       "littleImage": "./images/silicon-valley/atomic.png",
//       "picsId": "super-web-circuit",
//       "category": "silicon valley"
//     },
//     {
//       "name": "Yahoo Ceo",
//       "description": "A quick creative description of the pic",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/mmayer-1.jpg",
//       "littleImage": "./images/silicon-valley/yahoo-logo.png",
//       "picsId": "yahoo-ceo",
//       "category": "silicon valley"
//     },
//     {
//       "name": "G Ventrified 2",
//       "description": "A quick creative description of the pic",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/phoebe-peronto.jpg",
//       "littleImage": "./images/silicon-valley/gv-logo-icon.png",
//       "picsId": "g-ventrified-2",
//       "category": "silicon valley"
//     },
//     {
//       "name": "Wordpress Hero",
//       "description": "Get a photo like the J. Torke Wordpress development guru.",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/silicon-valley/torke-large-1.jpeg",
//       "littleImage": "./images/silicon-valley/wpress.png",
//       "picsId": "wordpress-hero",
//       "category": "silicon valley"
//     },
//     {
//       "name": "Iron Chef W",
//       "description": "Cat Kora was the first woman Iron Chefe",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/other-influencers/cat.png",
//       "littleImage": "./images/other-influencers/crossed-knives.jpg",
//       "picsId": "iron-chef-w",
//       "category": "other influencers"
//     },
//     {
//       "name": "Back Stage",
//       "description": "Back Stage is a photo isnpired by...",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/other-influencers/comicbdrop250.jpg",
//       "littleImage": "./images/other-influencers/q-social-media-icon.png",
//       "picsId": "comic-genius",
//       "category": "other influencers"
//     },
//     {
//       "name": "Martha's Assistant",
//       "description": "A quick creative description of the pic",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/other-influencers/marthastewart-mediakit.png",
//       "littleImage": "./images/other-influencers/martha_stewart.png",
//       "picsId": "marthas-assistant",
//       "category": "other influencers"
//     },
//     {
//       "name": "The White Wall",
//       "description": "The white wall is a location that brings out the...",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/smart-locations/elance-whitewall-350.jpg",
//       "littleImage": "",
//       "picsId": "white-wall",
//       "category": "smart locations"
//     },
//     {
//       "name": "In The Subway",
//       "description": "Once a monthe we make a trip to subway you can get... ",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/smart-locations/subway.jpg",
//       "littleImage": "needs-uber",
//       "picsId": "in-the-subway",
//       "category": "smart locations"
//     },
//     {
//       "name": "Market Street Live",
//       "description": "Once a week we pick a live city atmosphere",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/smart-locations/ypn-aaman.jpg  ",
//       "littleImage": "needs-uber",
//       "picsId": "market-street-live",
//       "category": "smart locations"
//     },
//     {
//     "name": "The Nano Center",
//     "description": "Invoke a modern scence and politik with this setting ",
//     "productlink": "../../app/components/product-page/product.html",
//     "profileImage": "./images/smart-locations/ypn-woman-nano.jpg",
//     "littleImage": "needs-uber",
//     "picsId": "nano-center",
//     "category": "smart locations"
//     },
//     {
//       "name": "How to levitate",
//       "description": "Inspired by Louish Pixel from Flickr",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/cheeky/boybluehoving.jpg",
//       "littleImage": "needs-uber",
//       "picsId": "how-to-levitate",
//       "category": "cheeky"
//     },
//     {
//       "name": "Cliffs of Philly",
//       "description": "Inspired by the Cliffs of Dover Pic from...",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/cheeky/cliffsofDover.jpg",
//       "littleImage": "needs-uber",
//       "picsId": "cliffs-of-philly",
//       "category": "cheeky"
//     },
//     {
//       "name": "The Computer Float",
//       "description": "Taken from a col pic that was seen in a commercial",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/cheeky/girlflying.jpg",
//       "littleImage": "needs-uber",
//       "picsId": "computer-float",
//       "category": "cheeky"
//     },
//     {
//       "name": "Too Many Papers",
//       "description": "Ever seen one of those commercials that makes",
//       "productlink": "../../app/components/product-page/product.html",
//       "profileImage": "./images/cheeky/stress_one-913.jpeg",
//       "littleImage": "needs-uber",
//       "picsId": "too-many-papers",
//       "category": "cheeky"
//     }
//   ]};
//
//   beforeEach(function () {
//     module('ganalytics');
//   });
//
//   beforeEach(inject(function (_picsSimple_, _$httpBackend_, _$q_) {
//      picsSimple = _picsSimple_;
//      $httpBackend = _$httpBackend_;
//      $q = _$q_;
//   }));
//
//   afterEach(function () {
//     //the httpBackend_ check function that goes here
//   });
//
//   it("should get all categories or all pic options", function () {
//       var response;
//       $httpBackend.when('GET', './assets/mock-data/pics-data-mock-hc/picsoptions.json')
//       .respond(200, allPics);
//       picsSimple.getAll()
//         .then(function (data) {
//           response = data;
//         });
//       // $httpBackend.expectGET('./assets/mock-data/pics-data-mock-hc/picsoptions.json').respond(200);
//       $httpBackend.flush();
//       expect(response).toEqual(allPics);
//
//   });
//
//   it("should get pics only in silicon valley category", function () {
//       var allCategories,
//       siliconPics;
//
//       $httpBackend.when('GET', './assets/mock-data/pics-data-mock-hc/picsoptions.json')
//       .respond(200, allPics);
//
//       function getSilicon(){
//         var siliconPics1;
//         var deferred = $q.defer();
//         picsSimple.getAll()
//           .then(function (data) {
//
//             allCategories = data.all;
//
//             siliconPics1 = allCategories.filter(function (obj) {
//             return obj.category  === "silicon valley";
//             });
//
//             deferred.resolve(siliconPics1);
//
//           });
//
//             return deferred.promise;
//         }
//
//        getSilicon()
//         .then(function(data) {
//           siliconPics = data;
//         });
//
//         $httpBackend.flush();
//         // dump(angular.mock.dump(siliconPics));
//         expect(siliconPics.length).toBeGreaterThan(1);
//
//   });
//
//   });
