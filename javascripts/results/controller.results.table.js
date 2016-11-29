(function () {
  'use strict';

  angular
    .module('oipa.countries')
    .controller('ResultsTableController', ResultsTableController);

  ResultsTableController.$inject = ['$scope'];

  function ResultsTableController($scope) {
    var vm = this;
    // vm.isCollapsed = true;
    vm.indicators = $scope.indicators;
    vm.selectedGroup = 'Number of jobs supported';
    vm.selectedIndicators = $scope.selectedIndicators;
    vm.first = true;

    vm.indicatorMeta = {
      'Number of jobs supported': {
        'title': 'Number of jobs supported',
        'description': 'For the measurement of the number of jobs supported (direct/indirect; male/female, etc.) we follow the DCED definition: “Number of direct and indirect jobs in the companies, sector or value chain targeted by the intervention at the end of the reporting period, converted in full-time equivalent. Report direct and indirect (e.g. outgrower) jobs separately. Disaggregate by gender. Convert in Full Time Equivalents (FTE) pro rata, based on local definition of a working week.” However, some programmes (such as PSI) follow the former DCED definition and measure the number of additional (created) jobs. The exact definition on programme or project level can be found in the table below under ‘result indicator description’. '
      },
      'Number of companies': {
        'title': 'Number of companies with supported plans to invest or trade',
        'description': 'The indicator ‘Number of companies with supported plans to invest or trade’ measures the number of companies which is or has been supported by means of a subsidy, financing or an assignment. In the case of an assignment, only the main contractor is included (companies which have signed a contract and/or received payments on behalf of the project). The total number of supported companies is thus larger in reality, because subcontractors may be hired (often local companies). State companies (more than 50% state owned) are not included under this indicator. The exact definition on programme or project level can be found in the table below under ‘result indicator description’. By aggregating the number of companies on project level, there may be some double counting since companies may be supported by more than one  project. The names of the companies are available on the project level under ‘project partners’. Under the project partners tab of this site, a list of all companies is available (project partner type: private sector), as well as information about the projects in which these companies are involved. '
      },
      'Amount of generated co-investment': {
        'title': 'Amount of co-investment generated by ODA in EUR',
        'description': 'Most programmes executed by the Netherlands Enterprise Agency provide a part (percentage) of the total project costs and require a (private) co-investment by companies or financial institutions (e.g. commercial loans). In the case of PPPs or public (infrastructure) projects, co-financing might also be provided by a local government, knowledge institutions, NGOs and foundations or other donors. (Impact investors are included under financial institutions if they are privately funded and under donors if they are donor funded.) Co-financing is not reported for each reporting period (due to high management costs), instead the total co-financing is reported at project completion. '
      }
    }
    vm.resultIndicators = [];
    vm.resultIndicatorsSource = [
        {
            indicatorName: "Number of jobs supported",
            displayName: "Number of jobs supported",
            level: 0,
            children: [
                {
                    indicatorName: "Number of full-time (equivalent) direct and indirect jobs supported - Total",
                    displayName: "Number of full-time (equivalent) jobs supported",
                    level: 1,
                    children: [
                        {
                            indicatorName: "Number of full-time (equivalent) direct jobs supported - Total",
                            displayName: "Direct jobs - Total",
                            level: 2,
                            children: [
                                {
                                    indicatorName: "Number of full-time (equivalent) direct jobs supported - Female",
                                    displayName: "Female",
                                    level: 3,
                                    children: []
                                },
                                {
                                    indicatorName: "Number of full-time (equivalent) direct jobs supported - Male",
                                    displayName: "Male",
                                    level: 3,
                                    children: []
                                },
                                {
                                    indicatorName: "Number of full-time (equivalent) direct jobs supported - Unspecified",
                                    displayName: "Unspecified",
                                    level: 3,
                                    children: []
                                },
                                {
                                    indicatorName: "Number of full-time (equivalent) direct jobs supported - Young (15-25)",
                                    displayName: "Young (15-25)",
                                    level: 3,
                                    children: []
                                },
                                {
                                    indicatorName: "Number of full-time (equivalent) direct jobs supported - Rural",
                                    displayName: "Rural",
                                    level: 3,
                                    children: []
                                },
                                {
                                    indicatorName: "Number of full-time (equivalent) direct jobs supported - Urban",
                                    displayName: "Urban",
                                    level: 3,
                                    children: []
                                },
                                {
                                    indicatorName: "Number of full-time (equivalent) direct jobs supported - Vulnerable groups",
                                    displayName: "Vulnerable groups",
                                    level: 3,
                                    children: []
                                },
                                {
                                    indicatorName: "Number of full-time (equivalent) direct jobs supported - Fragile states",
                                    displayName: "Fragile states",
                                    level: 3,
                                    children: []
                                },
                                {
                                    indicatorName: "Number of full-time (equivalent) direct jobs supported - Senior positions",
                                    displayName: "Senior positions",
                                    level: 3,
                                    children: []
                                },
                            ]
                        },
                        {
                            indicatorName: "Number of full-time (equivalent) indirect jobs supported - Total",
                            displayName: "Indirect jobs - Total",
                            level: 2,
                            children: []
                        },
                    ]
                },
            ]
        },
        {
            indicatorName: "Number of companies",
            displayName: "Number of companies supported",
            level: 0,
            children: [
                {
                    indicatorName: "Number of companies with supported plans to invest or trade - Total",
                    displayName: "Number of companies with supported plans to invest or trade",
                    level: 1,
                    children: [
                        {
                            indicatorName: "Number of companies with supported plans to invest or trade - Dutch companies",
                            displayName: "Dutch companies",
                            level: 2,
                            children: []
                        },
                        {
                            indicatorName: "Number of companies with supported plans to invest or trade - Local companies",
                            displayName: "Local companies",
                            level: 2,
                            children: [
                                {
                                    indicatorName: "Number of companies with supported plans to invest or trade - Local female entrepreneurs",
                                    displayName: "Local female entrepreneurs",
                                    level: 3,
                                    children: []
                                },
                                {
                                    indicatorName: "Number of companies with supported plans to invest or trade - Local young entrepreneurs <35 years",
                                    displayName: "Local young entrepreneurs <35 years",
                                    level: 3,
                                    children: []
                                },
                                {
                                    indicatorName: "Number of companies with supported plans to invest or trade - Local entrepreneurs from fragile states",
                                    displayName: "Local entrepreneurs from fragile states",
                                    level: 3,
                                    children: []
                                },
                            ]
                        },
                        {
                            indicatorName: "Number of companies with supported plans to invest or trade - Other companies",
                            displayName: "Other companies",
                            level: 2,
                            children: []
                        },
                    ]
                },
            ]
        },
        {
            indicatorName: "Amount of generated co-investment in EUR",
            displayName: "Amount of generated co-investment in EUR",
            level: 0,
            children: [
                {
                    indicatorName: "Amount of co-investment generated by ODA in EUR - Total",
                    displayName: "Amount of co-investment generated by ODA in EUR",
                    level: 1,
                    children: [
                        {    
                            indicatorName: "Amount of co-investment generated by ODA in EUR - by private sector/companies",
                            displayName: "by private sector/companies",
                            level: 2,
                            children: []
                        },
                        {
                            indicatorName: "Amount of co-investment generated by ODA in EUR - by private sector/financial institutions",
                            displayName: "by private sector/financial institutions",
                            level: 2,
                            children: []
                        },
                        {
                            indicatorName: "Amount of co-investment generated by ODA in EUR - by donors",
                            displayName: "by donors",
                            level: 2,
                            children: []
                        },
                        {
                            indicatorName: "Amount of co-investment generated by ODA in EUR - by (local) government",
                            displayName: "by (local) government",
                            level: 2,
                            children: []
                        },
                        {
                            indicatorName: "Amount of co-investment generated by ODA in EUR - by NGOs and foundations",
                            displayName: "by NGOs and foundations",
                            level: 2,
                            children: []
                        },
                        {
                            indicatorName: "Amount of co-investment generated by ODA in EUR - by knowledge institutions",
                            displayName: "by knowledge institutions",
                            level: 2,
                            children: []
                        },
                        
                    ]
                },
            ],
        },
    ];

    function getNames(tree, names){
        _.each(tree, function(item){
            names.push(item.indicatorName);
            if(item.children.length){
                names = getNames(item.children, names);
            }
        });

        return names;
    }

    vm.setSelected = function(item, $event){

        var selectedIndicators = [];

        // if header, select all underlying
        if(item.level == 0){
            var group = item.indicatorName;
            vm.selectedGroup = group;

            // select group
            selectedIndicators.push(group)

            // select underlying indicators
            var indicators = angular.copy(vm.indicators);
            indicators = _.each(indicators, function(value, key) {
                    value.name = key;
                    return value;
                }
            );
            var selectedIndicators = _.filter(indicators, function(value, key, obj) {
                if(obj[key].parent == vm.selectedGroup && obj[key].activity_count > 0){
                    return key;
                } else if(vm.selectedGroup == key){
                    return key;
                } else {
                    return false
                }
            });
            selectedIndicators = _.map(selectedIndicators, function(value, key){
                return value.name;
            });
        } else {
            // if not header, check if the user checked or unchecked the indicator
            var checked = ($scope.selectedIndicators.indexOf(item.indicatorName) > -1) ? false : true;
            
            // get all underlying
            var namesList = getNames(item.children, [item.indicatorName]);
            var currentSelected = angular.copy($scope.selectedIndicators);
            
            // if unchecked remove all underlying
            if(!checked){
                selectedIndicators = _.filter(currentSelected, function(name){
                    if(namesList.indexOf(name) > -1){
                        return false;
                    }
                    return name;
                });
            } else{
                // if checked, add all underlying
                _.each(namesList, function(name){
                    currentSelected.push(name);        
                });

                selectedIndicators = currentSelected;
            }
            
        }
        $scope.selectedIndicators = selectedIndicators;
        vm.selectedIndicators = selectedIndicators;
    }

    vm.updateTable = function(){

        function removeEmpty(tree, indicators){
            // if count 0 and no header or main indicator, remove key
            tree = _.filter(tree, function(item){
                
                var indicator = indicators[item.indicatorName]
                var keep = (indicator.level < 2 || indicator.activity_count > 0) ? item : false;
                return keep;
            })
            for (var i = 0;i < tree.length;i++){
                tree[i].children = removeEmpty(tree[i].children, indicators);
            }

            return tree;
        }

        var indicators = angular.copy(vm.indicators)
        var indicatorTree = angular.copy(vm.resultIndicatorsSource)

        indicators = removeEmpty(indicatorTree, indicators);
        vm.resultIndicators = indicators;
    }

    function activate() {
        
        $scope.$watch("indicators", function (indicators) {
            if(indicators != undefined){
                vm.indicators = indicators;
                vm.updateTable();
            }
        }, true);

        $scope.$watch("vm.resultIndicators", function (newArr, oldArr) {
            if(newArr.length > 0 && oldArr.length == 0){
                vm.setSelected({indicatorName: "Number of jobs supported", level: 0}, {'target': $('input[value="Number of jobs supported"]')})
                vm.first = false;
            }
        }, true);
    }

    activate();
  }
})();