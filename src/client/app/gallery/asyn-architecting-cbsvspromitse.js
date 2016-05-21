/**
###coding async EXAMPLE (ANGULAR)

*this didn't work  (//REASON: d1 this will resolve after (d2))


it("should get pics only in silicon valley category", function () {
    var allCategories,
    siliconPics;

    $httpBackend.when('GET', './assets/mock-data/pics-data-mock-hc/picsoptions.json')
    .respond(200, allPics);

    function getSilicon(){
      var siliconPics1;
    picsSimple.getAll()
      .then(function (data) {
      allCategories = data.all;
       silconPics1 = allCategories.filter(function (obj) {
        return obj.category  === "silicon valley";
      });
      dump("done");  //REASON: d1 this will resolve after (d2)
      });
      dump(siliconPics);
      return siliconPics1;  ??reason: this is undefined i think because of async
  }

    siliconPics = getSilicon();

    $httpBackend.flush();
    // dump(angular.mock.dump(siliconPics));
    // expect(silconPics.length).toBeGreaterThan(0); expect(silconPics.length).toBeGreaterThan(1);

});


### this worked with a cb
it("should get pics only in silicon valley category", function () {
    var allCategories,
    siliconPics;

    $httpBackend.when('GET', './assets/mock-data/pics-data-mock-hc/picsoptions.json')
    .respond(200, allPics);

    function getSilicon(cb){ <!-- callback added as an argument -->
      var siliconPics1;

      picsSimple.getAll()
        .then(function (data) {
          allCategories = data.all;

          siliconPics1 = allCategories.filter(function (obj) {
          return obj.category  === "silicon valley";
          });

          cb(siliconPics1);
        });
      }

     getSilicon(function(data) {
       siliconPics = data;  <!-- callback used to get async and store in var -->
     });

    $httpBackend.flush();
    expect(siliconPics.length).toBeGreaterThan(1);

});

### this works with a promise

it("should get pics only in silicon valley category", function () {
    var allCategories,
    siliconPics;

    $httpBackend.when('GET', './assets/mock-data/pics-data-mock-hc/picsoptions.json')
    .respond(200, allPics);

    function getSilicon(){
      var siliconPics1;
      var deferred = $q.defer();
      picsSimple.getAll()
        .then(function (data) {

          allCategories = data.all;

          siliconPics1 = allCategories.filter(function (obj) {
          return obj.category  === "silicon valley";
          });

          deferred.resolve(siliconPics1);
        });
          return deferred.promise;
      }

     getSilicon()
      .then(function(data) {
        siliconPics = data;
        dump(angular.mock.dump(siliconPics));
      });

    $httpBackend.flush();
    expect(siliconPics.length).toBeGreaterThan(1);

});


*/
