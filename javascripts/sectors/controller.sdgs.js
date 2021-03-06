/**
* SdgsController
* @namespace oipa.sectors.controllers
*/
(function () {
  'use strict';

  angular
    .module('oipa.sectors')
    .controller('SdgsController', SdgsController);

  SdgsController.$inject = ['$scope', 'Aggregations', 'Sdgs', 'FilterSelection', 'templateBaseUrl'];

  /**
  * @namespace SectorsController
  */
  function SdgsController($scope, Aggregations, Sdgs, FilterSelection, templateBaseUrl) {
    var vm = this;
    vm.templateBaseUrl = templateBaseUrl;
    vm.recipientSdgs = [];
    vm.sdgs = Sdgs;
    vm.selectedSdgs = Sdgs.selectedSdgs;
    vm.currentPage = 1;
    vm.pageSize = 4;
    vm.totalCount = 0;
    vm.q = '';
    vm.filterSelection = FilterSelection;

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf oipa.sectors.controllers.SectorsController
    */
    function activate() {

      vm.offset = 0;
      vm.update();

      $scope.$watch('vm.q', function(valueNew, valueOld){
        if (valueNew !== valueOld){
          vm.offset = 0;
          vm.currentPage = 1;
          vm.update();
        }
      }, true);

      $scope.$watch('vm.filterSelection.selectionString', function(valueNew, valueOld){
        if (valueNew !== valueOld){
          vm.offset = 0;
          vm.currentPage = 1;
          vm.update();
        }
      }, true);
    }

    vm.pageChanged = function(newPageNumber){
      vm.currentPage = newPageNumber;
      vm.update();
    }

    vm.update = function(){
      // for each active sector, get the results
      var filterString = FilterSelection.selectionString.split('&');
      for(var i = 0;i < filterString.length;i++){
        if (filterString[i].indexOf('sector') > -1){
          delete filterString[i];
        }
      }
      filterString = filterString.join('&');

      if(vm.q != ''){
        filterString += '&sector_name=' + vm.q;
      }
      
      Aggregations.aggregation('sector', 'count', filterString + '&sector_vocabulary=8', 'sector', vm.pageSize, vm.currentPage).then(successFn, errorFn);

      function successFn(data, status, headers, config) {
        vm.totalCount = data.data.count;
        vm.recipientSdgs = data.data.results;
      }

      function errorFn(data, status, headers, config) {
        console.log("getting sectors failed");
      }
    }

    vm.save = function(){
      FilterSelection.save();
    }

    activate();

  }
})();