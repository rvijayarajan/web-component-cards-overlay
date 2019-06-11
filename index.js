(function () {

 	var app = angular.module("wcCardsOverlay",[]);

	app.component("wcCardsOverlay", {
		templateUrl: "cards-overlay.html",
		bindings: {
		},
		controller: "CardsOverlayController"
	});

	app.controller("CardsOverlayController", CardsOverlayControllerFn);

	CardsOverlayControllerFn.$inject = ["$scope"];

	function CardsOverlayControllerFn($scope) {

		var vm = $scope.$ctrl;
	}

})();
