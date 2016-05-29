// var app = angular.module('ganalytics');
//     app.directive('bookingDirective', bookingDirective);
//
//     function bookingDirective(bookingService) {
//       return {
//         restrict: 'A',
//         link: function (scope, ielement, attributes) {
//           var event = new Event('DOMContentLoaded');
//           console.log(event);
//         var myElement = document.getElementById('booking');
//
//         console.log(myElement);
//         var dispatch =  myElement.dispatchEvent;
//         console.log(bookingService.zapla);
//         bookingService.zapla(dispatch, event);
//         }
//       };
//       $scope.startBookingService = function () {
//
//       };
//     }
//
//     app.factory('bookingService', bookingService);
