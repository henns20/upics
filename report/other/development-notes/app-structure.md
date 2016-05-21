##What application structure style is used here?
###Using 2 resources
::[John Papa's Style Guide](https://github.com/johnpapa/angular-styleguide#application-structure)
::[Google's style guide document](https://google.github.io/styleguide/angularjs-google-style.html#appstructure)
  ::[Googles Style Guide Document 2](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

##Why Both?
1: John Poppa's as an endorsement from the google team, but there are some areas where his architecture is confusing. Especially in the components, traditional content pages. Also he has services as a main directory which google style guide with services and components directory
2: Google Style Guide is a little bit more clearer and also seems to the updated somewhat as a reference in new phonecat structure.


##What Is The structure?
1: content pages as baseline directories: Following the google style guide
2: test specs inside of the relative directories testing
3: components: for now any services directives modules; filters that are common o can be reused
4: layout directory which creates the shell

## Components / Shared
1. using components directory:  a la google style guide
*  similar to the shared directory as i've seen with john papa
*  not true components directory:  putting in readme
+ reason: shared modules shared services  not full components  at this point
