(function () {
  'use strict';

  angular
    .module('oipa.results')
    .controller('ResultsController', ResultsController);

  ResultsController.$inject = ['$scope', 'Results', 'FilterSelection', 'templateBaseUrl', '$sce'];

  function ResultsController($scope, Results, FilterSelection, templateBaseUrl, $sce) {
    var vm = this;
    vm.filterSelection = FilterSelection;
    vm.programmeId = $scope.programmeId;

    vm.resultsYear = Results.year;

    vm.job_indicators = {
      'Number of jobs supported': {
        'level': 0, 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) direct and indirect jobs supported - Total': {
        'level': 1, 
        'chart_name': 'Total', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) direct jobs supported - Total': {
        'level': 2, 
        'chart_group': 'Direct jobs',
        'chart_name': 'Total',
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) direct jobs supported - Female': {
        'level': 3, 
        'chart_group': 'Direct jobs',
        'chart_name': 'Female', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) direct jobs supported - Male': {
        'level': 3, 
        'chart_group': 'Direct jobs',
        'chart_name': 'Male', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) direct jobs supported - Unspecified': {
        'level': 3, 
        'chart_group': 'Direct jobs',
        'chart_name': 'Unspecified', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) direct jobs supported - Young (15-25)': {
        'level': 3, 
        'chart_group': 'Direct jobs',
        'chart_name': 'Young', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) direct jobs supported - Rural': {
        'level': 3, 
        'chart_group': 'Direct jobs',
        'chart_name': 'Rural', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) direct jobs supported - Urban': {
        'level': 3, 
        'chart_group': 'Direct jobs',
        'chart_name': 'Urban', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) direct jobs supported - Vulnerable groups': {
        'level': 3, 
        'chart_group': 'Direct jobs',
        'chart_name': 'Vulnerable groups', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) direct jobs supported - Fragile states': {
        'level': 3, 
        'chart_group': 'Direct jobs',
        'chart_name': 'Fragile states', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) direct jobs supported - Senior positions': {
        'level': 3, 
        'chart_group': 'Direct jobs',
        'chart_name': 'Senior positions', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
      'Number of full-time (equivalent) indirect jobs supported - Total': {
        'level': 2, 
        'chart_group': 'Indirect jobs', 
        'chart_name': 'Total', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of jobs supported'},
    }

    vm.coi_indicators = {
      'Amount of generated co-investment in EUR': {
        'level': 0, 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Amount of generated co-investment in EUR'},
      'Amount of co-investment generated by ODA in EUR - Total': {
        'level': 1, 
        'chart_name': 'Total', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Amount of generated co-investment in EUR'},
      'Amount of co-investment generated by ODA in EUR - by private sector/companies': {
        'level': 2, 
        'chart_group': 'Private sector/companies',
        'chart_name': 'Total',
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Amount of generated co-investment in EUR'},
      'Amount of co-investment generated by ODA in EUR - by private sector/financial institutions': {
        'level': 2, 
        'chart_group': 'private sector/financial institutions',
        'chart_name': 'Total', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Amount of generated co-investment in EUR'},
      'Amount of co-investment generated by ODA in EUR - by donors': {
        'level': 2, 
        'chart_group': 'donors',
        'chart_name': 'Total', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Amount of generated co-investment in EUR'},
      'Amount of co-investment generated by ODA in EUR - by (local) government': {
        'level': 2, 
        'chart_group': '(local) government',
        'chart_name': 'Total', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Amount of generated co-investment in EUR'},
      'Amount of co-investment generated by ODA in EUR - by NGOs and foundations': {
        'level': 2, 
        'chart_group': 'NGOs and foundations', 
        'chart_name': 'Total', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Amount of generated co-investment in EUR'},
      'Amount of co-investment generated by ODA in EUR - by knowledge institutions': {
        'level': 2, 
        'chart_group': 'knowledge institutions', 
        'chart_name': 'Total',
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Amount of generated co-investment in EUR'}, 
    }

    vm.noc_indicators = {
      'Number of companies': {
        'level': 0, 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of companies'},
      'Number of companies with supported plans to invest or trade - Total': {
        'level': 1, 
        'chart_name': 'Total', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of companies'},
      'Number of companies with supported plans to invest or trade - Dutch companies': {
        'level': 2, 
        'chart_group': 'Dutch companies',
        'chart_name': 'Total', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of companies'},
      'Number of companies with supported plans to invest or trade - Local companies': {
        'level': 2, 
        'chart_group': 'Local companies',
        'chart_name': 'Total', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of companies'},
      'Number of companies with supported plans to invest or trade - Other companies': {
        'level': 2, 
        'chart_group': 'Other companies', 
        'chart_name': 'Total',
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of companies'},
      'Number of companies with supported plans to invest or trade - Local female entrepreneurs': {
        'level': 3, 
        'chart_group': 'Other companies',
        'chart_name': 'Local female entrepreneurs', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of companies'},
      'Number of companies with supported plans to invest or trade - Local young entrepreneurs <35 years': {
        'level': 3, 
        'chart_group': 'Other companies',
        'chart_name': 'Local young entrepreneurs <35 years', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of companies'},
      'Number of companies with supported plans to invest or trade - Local entrepreneurs from fragile states': {
        'level': 3, 
        'chart_group': 'Other companies',
        'chart_name': 'Local entrepreneurs from fragile states', 
        'actual': 0, 
        'activity_count': 0,
        'parent': 'Number of companies'},
    }
    
    vm.indicatorMeta = {
      'Number of jobs supported': {
        'title': 'Number of jobs supported',
        'description': 'For the measurement of the number of jobs supported (direct/indirect; male/female, etc.) we follow the DCED definition: “Number of direct and indirect jobs in the companies, sector or value chain targeted by the intervention at the end of the reporting period, converted in full-time equivalent. Report direct and indirect (e.g. outgrower) jobs separately. Disaggregate by gender. Convert in Full Time Equivalents (FTE) pro rata, based on local definition of a working week.” However, some programmes (such as PSI) follow the former DCED definition and measure the number of additional (created) jobs. The exact definition on programme or project level can be found in the table below under ‘result indicator description’. '
      },
      'Number of companies': {
        'title': 'Number of companies with supported plans to invest or trade',
        'description': 'The indicator ‘Number of companies with supported plans to invest or trade’ measures the number of companies which is or has been supported by means of a subsidy, financing or an assignment. In the case of an assignment, only the main contractor is included (companies which have signed a contract and/or received payments on behalf of the project). The total number of supported companies is thus larger in reality, because subcontractors may be hired (often local companies). State companies (more than 50% state owned) are not included under this indicator. The exact definition on programme or project level can be found in the table below under ‘result indicator description’. By aggregating the number of companies on project level, there may be some double counting since companies may be supported by more than one  project. The names of the companies are available on the project level under ‘project partners’. Under the project partners tab of this site, a list of all companies is available (project partner type: private sector), as well as information about the projects in which these companies are involved. '
      },
      'Amount of generated co-investment in EUR': {
        'title': 'Amount of co-investment generated by ODA in EUR',
        'description': 'Most programmes executed by the Netherlands Enterprise Agency provide a part (percentage) of the total project costs and require a (private) co-investment by companies or financial institutions (e.g. commercial loans). In the case of PPPs or public (infrastructure) projects, co-financing might also be provided by a local government, knowledge institutions, NGOs and foundations or other donors. (Impact investors are included under financial institutions if they are privately funded and under donors if they are donor funded.) Co-financing is not reported for each reporting period (due to high management costs), instead the total co-financing is reported at project completion. '
      }
    }

    vm.selectedIndicators = [];

    vm.update = function(){
      var programme_addition = ''; 
      if(vm.programmeId != undefined){
        programme_addition = '&related_activity=' + vm.programmeId;
      }
      Results.aggregation('result_indicator_title', 'activity_count,actual', "&result_indicator_period_end_year=2016" + vm.filterSelection.selectionString + programme_addition + '&indicator_period_actual_null=False', 'result_indicator_title').then(succesFn, errorFn);

      function succesFn(data, status, headers, config){
        var results = data.data.results;
        var job_indicators = angular.copy(vm.job_indicators);
        var noc_indicators = angular.copy(vm.noc_indicators);
        var coi_indicators = angular.copy(vm.coi_indicators);

        // Co-investment indicators
        for(var i = 0;i < results.length;i++){

          if (job_indicators[results[i].result_indicator_title] != undefined){
            job_indicators[results[i].result_indicator_title].actual = results[i].actual;
            job_indicators[results[i].result_indicator_title].activity_count = results[i].activity_count;
          } else if (noc_indicators[results[i].result_indicator_title] != undefined){
            noc_indicators[results[i].result_indicator_title].actual = results[i].actual;
            noc_indicators[results[i].result_indicator_title].activity_count = results[i].activity_count;
          } else if (coi_indicators[results[i].result_indicator_title] != undefined){
            coi_indicators[results[i].result_indicator_title].actual = results[i].actual;
            coi_indicators[results[i].result_indicator_title].activity_count = results[i].activity_count;
          }
        }

        job_indicators['Number of full-time (equivalent) direct and indirect jobs supported - Total'].activity_count = _.reduce(job_indicators, function(memo, indicator){ 
          var value;
          (indicator.level == 2) ? value = memo + indicator.activity_count: value = memo;
          return value;
        }, 0);
        
        
        job_indicators['Number of full-time (equivalent) direct jobs supported - Unspecified'].activity_count = job_indicators['Number of full-time (equivalent) direct jobs supported - Total'].activity_count - job_indicators['Number of full-time (equivalent) direct jobs supported - Female'].activity_count;
        job_indicators['Number of full-time (equivalent) direct jobs supported - Unspecified'].actual = job_indicators['Number of full-time (equivalent) direct jobs supported - Total'].actual - job_indicators['Number of full-time (equivalent) direct jobs supported - Female'].actual - job_indicators['Number of full-time (equivalent) direct jobs supported - Male'].actual;


        noc_indicators['Number of companies with supported plans to invest or trade - Total'].activity_count = _.reduce(noc_indicators, function(memo, indicator){ 
          var value;
          (indicator.level == 2) ? value = memo + indicator.activity_count: value = memo;
          return value;
        }, 0);

        coi_indicators['Amount of co-investment generated by ODA in EUR - Total'].activity_count = _.reduce(coi_indicators, function(memo, indicator){ 
          var value;
          (indicator.level == 2) ? value = memo + indicator.activity_count: value = memo;
          return value;
        }, 0);

        var indicators = job_indicators;
        for (var attrname in noc_indicators) { indicators[attrname] = noc_indicators[attrname]; }
        for (var attrname in coi_indicators) { indicators[attrname] = coi_indicators[attrname]; }
        vm.indicators = indicators;
      }
    }

    function activate() {

      $scope.$watch('vm.filterSelection.selectionString', function(valueNew, valueOld){
        vm.update();
      }, true);
    }

    function errorFn(data, status, headers, config) {
      console.log("getting countries failed");
    }

    activate();
    vm.update();
  }
})();
