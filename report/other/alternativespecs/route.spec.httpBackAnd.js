describe("gallery routes", function () {
  describe("state", function () {
    var view = 'gallery/gallery.html',
      $httpBackend,
      $rootScope,
      $state;

    beforeEach(module("ganalytics"));

    beforeEach(inject(function(_$state_, _$rootScope_, _$httpBackend_) {
        $state = _$state_;
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
      }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest(); // this 1 is the 1 used here
    });

    it('should map state dashboard to url / ', function() {
        expect($state.href('gallery', {})).toEqual('#/gallery');
    });

    it('should map /gallery route to gallery View template ', function() {
        expect($state.get('gallery').views.main_content.templateUrl).toEqual(view);
    });

    it('of gallery should work with $state.go', function () {
        $httpBackend.expectGET("gallery/gallery.html").respond('');
        $state.go('gallery');
        $rootScope.$apply();
        expect($state.is('gallery')).toBe(true);
        $httpBackend.flush();
    });
  });
});
