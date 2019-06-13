(function () {

 	var app = angular.module("wcCardsOverlay",[]);

	app.component("wcCardsOverlay", {
		templateUrl: "cards-overlay.html",
		bindings: {
			config: "<cardsConfig"
		},
		controller: "CardsOverlayController"
	});

	app.controller("CardsOverlayController", CardsOverlayControllerFn);

	CardsOverlayControllerFn.$inject = ["$scope"];

	function CardsOverlayControllerFn($scope) {

		var vm = $scope.$ctrl;
	}

})();
