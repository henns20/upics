describe("site-content routes", function () {
  describe('state routes & views', function () {
      var $state,
      $templateCache,
      $rootScope,
      states = [
        'home',
        'discover',
        // 'gallery',
        'how-it-works',
        'groups',
        'custom',
        'contact'

      ],

      siteContentPartials = [
        'site-content/partials/home.html',
        'site-content/partials/discover.html',
        // 'site-content/partials/gallery.html',
        'site-content/partials/how-it-works.html',
        'site-content/partials/groups.html',
        'site-content/partials/custom.html',
        'site-content/partials/contact.html'
      ];

      beforeEach(module('ganalytics.siteContent'));

      beforeEach(inject(function (_$state_, _$templateCache_, _$rootScope_) {
        $state = _$state_;
        $templateCache = _$templateCache_;
        $rootScope = _$rootScope_;
      }));

      describe('Checking routes to view templates:  ', function () {

        states.forEach(routesToViewIterator);

        /**
         * @desc Wraps it function for DRY purposes
         * Uses states and partials array
         */
        function routesToViewIterator(value, i) {
          it('should map ' + states[i] + ' route to ' + siteContentPartials[i] +  ' View template', function () {
              expect($state.get(states[i])
                .views.mainContent.templateUrl).toEqual(siteContentPartials[i]);
          });
        }
      });

      describe('Checking capital management states to site urls: ', function () {

        it('should map ' + states[0] + ' route to the proper site url', function () {
            expect($state.href(states[0], {})).toEqual('#/home');
        });

        it('should map ' + states[1] + ' route to the proper site url', function () {
            expect($state.href(states[1], {})).toEqual('#/discover');
        });

        // it('should map ' + states[2] + ' route to the proper site url', function () {
        //     expect($state.href(states[2], {})).toEqual('#/gallery');
        // });

        it('should map ' + states[2] + ' route to the proper site url', function () {
            expect($state.href(states[2], {})).toEqual('#/how-it-works');
        });

        it('should map ' + states[3] + ' route to the proper site url', function () {
            expect($state.href(states[3], {})).toEqual('#/groups');
        });

        it('should map ' + states[4] + ' route to the proper site url', function () {
            expect($state.href(states[4], {})).toEqual('#/custom');
        });

        it('should map ' + states[5] + ' route to the proper site url', function () {
            expect($state.href(states[5], {})).toEqual('#/contact');
        });

      });

      describe('State go should propagate the proper state', function () {

        states.forEach(stateGoItBlockIteratorHelper);

        function stateGoItBlockIteratorHelper(value, i) {

          // beforeEach(function () {
          //   $templateCache.put(shellPartials[0], '');
          //   $templateCache.put(shellPartials[1], '');
          //   $templateCache.put(shellPartials[2], '');
          //   $templateCache.put(shellPartials[3], '');
          // });

          it('$state.go test for' + states[i], function() {
            $templateCache.put(siteContentPartials[i], '');
            $state.go(states[i]);
            $rootScope.$apply();
            expect($state.is(states[i])).toBe(true);
          });

        }

    });
});
});
