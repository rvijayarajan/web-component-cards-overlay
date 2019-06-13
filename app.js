(function () {

 	var app = angular.module("main",['wcCardsOverlay']);

	app.component("app", {
		template: '<wc-cards-overlay style="min-height: 50vh;width: 100%" cards-config="config"></wc-cards-overlay>',
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {

		$scope.config = {
			image: '',
			title: 'Overlay Card',
			bodyTexts: [{
				text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
			},{
				text: 'Last updated 3 mins ago'
			}]
		};
		
	}

})();
