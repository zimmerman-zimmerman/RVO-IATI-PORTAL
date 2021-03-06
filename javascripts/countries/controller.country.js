/**
* CountryController
* @namespace oipa.countries
*/
(function () {
  'use strict';

  angular
    .module('oipa.countries')
    .controller('CountryController', CountryController);

  CountryController.$inject = ['$rootScope', '$scope', 'Countries', 'templateBaseUrl', '$stateParams', 'FilterSelection', 'TransactionAggregations', 'countryPageUrls', 'homeUrl', '$location', 'uploadBaseUrl', 'oipaUrl'];

  /**
  * @namespace CountryController
  */
  function CountryController($rootScope, $scope, Countries, templateBaseUrl, $stateParams, FilterSelection, TransactionAggregations, countryPageUrls, homeUrl, $location, uploadBaseUrl, oipaUrl) {
    var vm = this;
    vm.country = null;
    vm.country_id = $stateParams.country_id;
    vm.filterSelection = FilterSelection;
    vm.selectedTab = 'summary';
    vm.countryPageUrl = null;
    vm.disbursements = null;
    vm.budget = null;
    vm.budgetLeft = 0;
    vm.progressStyle = {};
    vm.templateBaseUrl = templateBaseUrl;
    vm.busy = true;
    vm.uploadBaseUrl = uploadBaseUrl;
    vm.aggregated_transactions = {};

    vm.tabs = [
      {'id': 'summary', 'name': 'Summary', 'count': -1},
      {'id': 'programmes', 'name': 'Programmes', 'count': -1},
      {'id': 'activities', 'name': 'Projects', 'count': -1},
      {'id': 'sectors', 'name': 'Sectors', 'count': -1},
      {'id': 'implementing-organisations', 'name': 'Project partners', 'count': -1},
    ]

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf oipa.countries.controllers.CountryController
    */
    function activate() {

      $scope.$watch('vm.filterSelection.selectionString', function (selectionString) {
        vm.update(selectionString);
      }, true);

      if(countryPageUrls[vm.country_id] != undefined){
        vm.countryPageUrl = countryPageUrls[vm.country_id].url;  
      }
      
      // for each active country, get the results
      Countries.getCountry(vm.country_id).then(successFn, errorFn);
    
      function successFn(data, status, headers, config) {
        vm.country = data.data;
        Countries.selectedCountries.push({'count': 0, 'recipient_country': {'code':vm.country.code,'name':vm.country.name}});
        FilterSelection.save();
        vm.busy = false;
      }
    }

    function errorFn(data, status, headers, config) {
      console.log("getting country failed");
      vm.busy = false;
    }

    vm.setBudgetLeft = function(){

      if(vm.aggregated_transactions['incoming_fund'] == undefined){ vm.aggregated_transactions['incoming_fund'] = 0; }
      if(vm.aggregated_transactions['disbursement'] == undefined){ vm.aggregated_transactions['disbursement'] = 0; }
      if(vm.aggregated_transactions['expenditure'] == undefined){ vm.aggregated_transactions['expenditure'] = 0; }

      vm.budget = vm.aggregated_transactions['incoming_fund'];
      vm.disbursements = vm.aggregated_transactions['disbursement'] + vm.aggregated_transactions['expenditure'];

      vm.budgetLeft = Math.round(vm.disbursements / vm.budget * 100);
      if (isNaN(vm.budgetLeft)) { vm.budgetLeft = 0; }
      vm.progressStyle = {'width': vm.budgetLeft + '%'}
    }

    vm.update = function(selectionString){
      if (selectionString.indexOf("recipient_country") < 0){ return false;}
      
      TransactionAggregations.aggregation('recipient_country', 'disbursement,expenditure,incoming_fund', selectionString).then(function(data, status, headers, config){

        for(var i = 0;i < data.data.results.length;i++){
          if(data.data.results[i].recipient_country.code == vm.country_id){
            vm.aggregated_transactions = data.data.results[i];
          }
        }
        vm.setBudgetLeft();
      }, errorFn);
    }

    vm.download = function(format){

      var url = homeUrl + '/export/?type=country-detail&detail=' + vm.country_id + '&format='+format+'&endpoint=countries&fields=code,name&budget=' + vm.budget + '&expenditure=' + vm.disbursements;
      window.open(url);
    }

    activate();
  }
})();
