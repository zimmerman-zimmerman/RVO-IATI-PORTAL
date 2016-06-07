(function () {
  'use strict';

  angular
    .module('oipa.countries')
    .controller('ResultsTableController', ResultsTableController);

  ResultsTableController.$inject = ['$scope'];

  function ResultsTableController($scope) {
    var vm = this;
    vm.isCollapsed = false;
    vm.indicators = $scope.indicators;
    vm.selectedGroup = $scope.selectedGroup;

    vm.resultIndicatorsSource = [
    	{
	    	indicatorName: "Number of jobs supported",
	    	header: true,
	    	children: [
	    		{
			    	indicatorName: "Number of full-time (equivalent) direct jobs supported - Total",
			    	children: [
			    		{
					    	indicatorName: "Number of full-time (equivalent) direct jobs supported - Female",
					    	children: []
					    },
					    {
					    	indicatorName: "Number of full-time (equivalent) direct jobs supported -  Young (15-25)",
					    	children: []
					    },
					    {
					    	indicatorName: "Number of full-time (equivalent) direct jobs supported -  Rural",
					    	children: []
					    },
					    {
					    	indicatorName: "Number of full-time (equivalent) direct jobs supported -  Urban",
					    	children: []
					    },
					    {
					    	indicatorName: "Number of full-time (equivalent) direct jobs supported -  Vulnerable groups ",
					    	children: []
					    },
					    {
					    	indicatorName: "Number of full-time (equivalent) direct jobs supported -  Fragile states",
					    	children: []
					    },
					    {
					    	indicatorName: "Number of full-time (equivalent) direct jobs supported -  Senior positions",
					    	children: []
					    },
			    	]
			    },
			    {
			    	indicatorName: "Number of full-time (equivalent) indirect jobs supported - Total",
			    	children: []
			    },
	    	]
	    },
	    {
	    	indicatorName: "Number of companies with supported plans to invest or trade",
	    	header: true,
	    	children: [
	    		{
			    	indicatorName: "Number of companies with supported plans to invest or trade - Total",
			    	children: [
			    		{
					    	indicatorName: "Number of companies with supported plans to invest or trade - Dutch companies",
					    	children: []
					    },
					    {
					    	indicatorName: "Number of companies with supported plans to invest or trade - Local companies",
					    	displayName: "Local companies",
					    	children: [
					    		{
							    	indicatorName: "Number of companies with supported plans to invest or trade - Local female entrepreneurs",
							    	children: []
							    },
							    {
							    	indicatorName: "Number of companies with supported plans to invest or trade - Local young entrepreneurs <35 years",
							    	children: []
							    },
							    {
							    	indicatorName: "Number of companies with supported plans to invest or trade - Local entrepreneurs from fragile states",
							    	children: []
							    },
					    	]
					    },
					    {
					    	indicatorName: "Number of companies with supported plans to invest or trade - Other companies",
					    		children: []
					    },
			    	]
			    },
	    	]
	    },
	    {
	    	indicatorName: "Amount of co-investment generated by ODA",
	    	header:true,
	    	children: [
	    		{
			    	indicatorName: "Amount of co-investment generated by ODA - Total",
			    	children: [
			    		{
					    	indicatorName: "by private sector/companies",
					    	children: []
					    },
			    		{
					    	indicatorName: "by private sector/financial institutions",
					    	children: []
					    },
					    {
					    	indicatorName: "by donors",
					    	children: []
					    },
					    {
					    	indicatorName: "by (local) government",
					    	children: []
					    },
					    {
					    	indicatorName: "by NGOs and foundations",
					    	children: []
					    },
					    {
					    	indicatorName: "by knowledge institutions",
					    	children: []
					    },
					    
			    	]
			    },
	    	]
	    },
    ];

    vm.setGroup = function(item){
    	console.log(item);
    	if(item.hasOwnProperty('header')){
    		$scope.selectedGroup = item.indicatorName
    	}
    }

    vm.resultIndicators = angular.copy(vm.resultIndicatorsSource)

    vm.updateTable = function(){

    	function removeEmpty(tree, indicators){
    		// if count 0 and no header, remove key

    		tree = _.filter(tree, function(item){
    			var indicator = indicators[item.indicatorName]
    			var keep = (indicator.hasOwnProperty('header') || indicator.activity_count > 0) ? item : false;
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
	    vm.resultIndicators = indicators
    }

    vm.toggleHideChildren = function($event) {
      var parent = $($event.target).closest('.parent') 
      var children = parent.next()
      parent.toggleClass('expanded').toggleClass('collapsed')
    }

    function activate() {

    	$scope.$watch("indicators", function (indicators) {
    		if(indicators != undefined){
    			vm.indicators = indicators;
				vm.updateTable();
    		}
		}, true);
    }

    activate();
  }
})();