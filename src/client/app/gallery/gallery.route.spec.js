// describe("gallery routes", function () {
//   describe("state", function () {
//     var view = 'gallery/gallery.html',
//       $rootScope,
//       $state,
//       $templateCache;
//
//     beforeEach(module("ganalytics"));
//
//     beforeEach(inject(function(_$state_, _$templateCache_, _$rootScope_) {
//         $state = _$state_;
//         $templateCache = _$templateCache_;
//         $rootScope = _$rootScope_;
//       }));
//
//     beforeEach(function () {
//         $templateCache.put(view, '');
//     });
//
//     describe("Main gallery state", function () {
//
//       it('should map state gallery to url /gallery ', function() {
//           expect($state.href('gallery', {})).toEqual('#/gallery');
//       });
//
//       it('should map /gallery route to gallery View template ', function() {
//           expect($state.get('gallery').views.main_content.templateUrl).toEqual(view);
//       });
//
//       it('url gallery should work with $state.go', function () {
//           $state.go('gallery');
//           $rootScope.$apply();
//           dump(angular.mock.dump($state.current.name));
//           expect($state.is('gallery')).toBe(true);
//       });
//     });
//
//     describe("gallery.all state", function () {
//
//         it('should map state gallery.all to url /gallery/all ', function() {
//             expect($state.href('gallery.all', {})).toEqual('#/gallery/all');
//         });
//
//         it('should map /gallery/all route to the gallery View template ', function() {
//             expect($state.get('gallery.all').views.main_content.templateUrl).toEqual(view);
//         });
//
//         it('gallery.all should work with $state.go', function () {
//             $state.go('gallery.all');
//             $rootScope.$apply();
//             dump(angular.mock.dump($state.current.name));
//             expect($state.is('gallery.all')).toBe(true);
//         });
//
//       });
//
//       describe("gallery.silicon-valley state", function () {
//
//           it('should map state gallery.silicon-valley  to url /gallery ', function() {
//               expect($state.href('gallery.silicon-valley', {})).toEqual('#/gallery/silicon-valley');
//               dump(angular.mock.dump($state.current.url));
//           });
//
//           it('should map /gallery/silicon-valley route to the gallery View template ', function() {
//               expect($state.get('gallery.silicon-valley').views.main_content.templateUrl).toEqual(view);
//           });
//
//           it('gallery.silicon-valley should work with $state.go', function () {
//               $state.go('gallery.silicon-valley');
//               $rootScope.$apply();
//
//               expect($state.is('gallery.silicon-valley')).toBe(true);
//           });
//
//         });
//   });
// });
