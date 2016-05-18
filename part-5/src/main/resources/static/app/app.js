(function () {
    angular
        .module('myApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope'];

    /* @ngInject */
    function mainCtrl($scope) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'mainCtrl';

        activate();

        ////////////////

        function activate() {
            toastr.info('app loaded succesfully');

            console.log('app loaded succesfully');
        }
    }
}());

