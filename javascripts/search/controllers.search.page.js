(function () {
  'use strict';

  angular
    .module('oipa.searchPage')
    .controller('SearchPageController', SearchPageController);

  SearchPageController.$inject = ['templateBaseUrl', '$scope', '$stateParams', 'FilterSelection'];

  function SearchPageController(templateBaseUrl, $scope, $stateParams, FilterSelection) {
    var vm = this;
    vm.selectedTab = 'activities';
    vm.searchValue = '';
    vm.templateBaseUrl = templateBaseUrl;

    vm.tabs = [
      {'id': 'activities', 'name': 'Projects', 'count': -1},
      {'id': 'programmes', 'name': 'Programmes', 'count': -1},
      {'id': 'countries', 'name': 'Countries', 'count': -1},
      {'id': 'sectors', 'name': 'Sectors', 'count': -1},
      {'id': 'organisations', 'name': 'Project partners', 'count': -1},
    ];

    activate();

    function activate(){
      if($stateParams.search != undefined){
        vm.searchValue = $stateParams.search;
      }

      if($stateParams.tab != undefined){
        vm.selectedTab = $stateParams.tab;
      }

    }

  }
})();
