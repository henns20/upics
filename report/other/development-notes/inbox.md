##navigations
::john p : navigation news componentized(isolated) but also dynamic using some sort of route script
::: first isolate; come back in and 2 make it dynamic
::: john p uses nginclude for the navigation bars(***not sure if this is the best practice anymore***)


###dev environment

: issues regarding (html 5 mode) and (nested ui view in a shell directive):

: ui bootstrap & ui router projects(not using html5 mode)
::preface note on html 5 mode: both ui bootstrap & ui router projects not using html 5 mode in their git h-pages

::html 5 mode: unable to get it with github

::atom server::
::works well without html 5 mode & without shell component/directive(goes directly tohome page)
::atom-server: unable to html 5 mode working there as well
::architecture: john p uses nginclude 2 include all of main page elements
::::unable to get that the work: nginclude with a nested you are router you
::::the route does not registert he route does not register/read page/route
::behavior::
::server start: is not go to 'opening' route (in this case'/' need to type it in)
::after routers tighten: goes to the proper route and the nested ui router populates
::topnav is a directive in this show: no problem with that that populates(so it is isolated to the ui view  div)
::on refresh also a problem:: completely disappears

::github::
: behavior(with using a show and a nested you are relative(nginclude & dir))
::same behavior when upload it to git h
::::routing doesn't register
::::uiview in the html does  not render
:: pressing(or once on the correct route) ui view does populate
::::refreshing: but again refreshing does not work


###github & git (put this in git & git hub eventually at the end of this project)
:gh-pages & master  - how to work with and develop
::keeping them in sync
::1 way just work with gh-pagesand when you want to sync with master
:::: from  gh-pages
:::: git checkout master
:::: git pull origin gh-pages
:::: git push


###how to solve problems and move on fast
: break down & behavior:
: get to the nearest working base
: move on in the short term (don't get stuck)
: submit it as a question: or/and problem solve later or long term focused

###ngincludes changed to directives (by the end-for example footer)

###shell component/dir
: media working

###style guide routing(2) / routing in the individual components(1)
:(1) got one working - with a more recognizable angular patterns
:: search issues in angular style guide router
:: need to finish the core route
:(2) longer term understand and post questions

### testing
: prog
:this is a decent debug
::karma start karma.conf.js --auto-watch --log-level debug > log.txt (stack overflow)



### $resource
1. query vs get
* http://stackoverflow.com/questions/19455803/resource-whats-the-difference-between-get-and-query
