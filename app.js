(function () {

 	var app = angular.module("main",['wcCardsOverlay']);

	app.component("app", {
		template: '<wc-cards-overlay style="min-height: 50vh;width: 100%"></wc-cards-overlay>',
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {

		
		
	}

})();
