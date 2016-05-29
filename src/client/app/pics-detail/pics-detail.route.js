(function() {
    'use strict';

    angular
        .module('ganalytics')
        .config(stateConfig);

    /*****
     * @ngInject
     *****/
    function stateConfig($stateProvider) {
        $stateProvider.state('picDetails', {
            url: '/photo-detail/{picsId}',
            views: {
                maincontent: {
                    templateUrl: 'app/pics-detail/pics-detail.html',
                    controller: 'PicsDetailCtrl'
                }
            }
        });
    }
})();
