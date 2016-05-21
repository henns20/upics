##1. routes
* should map state gallery to url /gallery
* should map /gallery route to gallery View template
* of gallery should work with $state.go

##2. controllers
* should be created successfully (toBeDefined)

* after activate (nested describe block)(john papa convention)

* Bradley Braithwaite
+ after you know how to inject and use controller service in test
** depends on the controller behavior
+ more goes directly to behavior

* what's the distinction when learning to test the controller?(especially in the context of the lesson : which include conventions; access)
+inject controller service
+and more distinctly:  how(and that you have to) to use controller service: development before ngcode(brainstorming)a anonymous function instructor
+ngmark conventions
- using the module function(not really distinction here)
- injecting $controller service(just like any other service)
**Additionally: creating an instance of your controller after the inject(using the controller service)(example of the decorator)
** this additional instantiation* allows for parameters:
++ services relevant 2 the controller; values you want to set inside the controller[both using object conventions{}]
**additionally: (need to use the controller service  after inject you can use a function to create a controller on-the-fly and then name it an attitude or cochlear)
++ convention looks like so:
--
var fn = function(){...}
$controller(fn, {$scope: $scope, $location: $location}, [bindings]);
--


### behaviors


*testing a resource(*)
+




##3. notes on pluralsights ajs unit testing in depth
*testing promises
*result controller
+ mocks the service - with q and rootscope.apply

### 1 parts of the tutorial

* (1)getting started:
+ setting up the stack([jasmine, ngmock, browser, editor, spec html] node, npm, karma(why reload advantage also in commandline),  karma adapters,  karma cli global)


* (2) intro ngmark core functions (<.mock.module, angular.mark.inject, angular.mock.dump)

#### 1.a Unit Testing Http Interactions With ngmark

* (3) unit testing http ($httpBackend the use of)
+requires: $httpBackend.flush(); (expectation of data would go after)
+ http backend mock service(httpBackend.expectGET[POST]
+ when get & the use of when(still confused)
+ overall: testing 4 the proper http request and can set the results-
+ questions that come out of this poor tutorial(jqs)
- Why mock results?: still not clear on why mocking results would be beneficial if the logic in the mock isn't test (more notes in my notes 4 this tutorial)
-$httpBackend.[when versus expect]
**tutorial says: use 1 - when you want to manipulatedata
**also says: expect is used when you want to make sure you're using the api correctly
- http vs resource  (ajax versus restful*)
- angularjs  https://app.pluralsight.com/player?course=angularjs-fundamentals&author=jim-cooper&name=angularjs-fundamentals-m3-services&clip=0&mode=live
+ unit test tests omdi service
-questions asked:
** should return search movie data
** should return the data by id
** should handle error


* (4) unit testing resources
