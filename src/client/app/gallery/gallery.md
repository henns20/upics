


##purpose:
*more angular way of doing  a gallery
+like testing tutorial:
- different states for different categories
**so you can navigate away and browse back to the same category page (for 1)
**more granularity as far as pages(for many reasons like navigation from and navigation to)
**filter ing reliancein view is not so good(ari learner)as far as performance goes(architecture issue, I also think it's a clean code issue + individual page state 4 category opposition(for lack of better words right now))
**


## Gallery Development(steps: strategies)
###behaviors
* (1) many behaviors focusing on 1 behavior 1 core behavior right now
* (2) Proper Rendering (of data(pic options)) & Views and navigation that works
+ Behavior Main  Gallery page
- render from other site pages on the should render ALL options
- render: click category link renders only category options
** link in view cause estate change
**  url(location) reflects category(substate or sub page of gallery)
** back button in the browser(when in pick details or another page will go back to the specific category page)
++combination: history and unique url


## identifying ui behaviors (and the framework* behavior)

### Main Gallery Page
* ui
+ Main Gallery (/gallery) page renders:
- ALL pic options
- initially  & any following clicks on gallery link on main nav

* tests
+ route tests
- /gallery route initializes proper state and proper controller
-  gallery state fires getAllFunction with the proper get url
- picsList is an arrayin

### gallery testing notes
* original describe function
+ should on 'gallery' state (aka #/gallery site path) call picsSimple.getAll() with on 'gallery' state (aka #/gallery site path) and should store returned value in vm.picsList
+ realized something and broke it down to this
- nested describe inside after activation
**: describe state  
State 'gallery' (aka #/gallery site path




### category pages
* ui
category link relative category images render
* should animate and
* location euro(the route) should indicate gallery/(category title)
* 10 click back to it from10 click back to it fromdetails (for example clicking back on browser goes back to the relative category page (with relative rendering of category images)

* tests




- Initial and Repeat
- Navigating From Other Parts Of The Site to
** renders

** on original navigation and any other reputed navigation back to
- navigating to(clicking on) individual categories renders:
** relative category pic options




##parts steps elements
* right service for silicon valley category
* right service getAll(done)
* first strategy: strategy 2: 1 controller detecting state; calling new http call(for example: silicon valley state calls git silicon valley)


### problems  with gallery development
* so the promise was resolving (showing that with a console.log) but not showing pics in the view gallery
* problem with now error was that it was not an array that I was giving the ng repeat | I wrapped the array in an all property;
* so data was not reflecting

* spyOn - was not working with the http calls
+ spyOn worked once called it BEFORE the controller is instantiated.
+ (in another issue) spyonis not working
- control was calling to functions with a http call the 1 on instantiation and 1 on$routeScope.$apply products
** I only had to spyOn for the function working with the$route scope.on('$stateStartChange')
** this was for: strategy to gary using 1 controller and stateChangeStart event
