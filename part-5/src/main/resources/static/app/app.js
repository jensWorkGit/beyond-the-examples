(function(angular) {
    angular.module("myApp", []);
}(angular));

angular
    .module('myApp')
    .controller('mainController', mainController);

mainController.$inject = ['$scope'];

/* @ngInject */
function mainController($scope) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'mainController';

    activate();

    ////////////////

    function activate() {
        toastr.info('app loaded succesfully');
    }
}