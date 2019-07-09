angular.module('wcCardsOverlayTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('cards-overlay.html',
    "<div class=\"card bg-dark text-white\">\r" +
    "\n" +
    "  <img src=\"{{$ctrl.config.image}}\" class=\"card-img\" alt=\"Overlay image unavailable. Kindly check the source url.\">\r" +
    "\n" +
    "  <div class=\"card-img-overlay\">\r" +
    "\n" +
    "    <h5 class=\"card-title\" ng-if=\"$ctrl.config.title\">{{$ctrl.config.title}}</h5>\r" +
    "\n" +
    "    <p class=\"card-text\" ng-repeat=\"bodyText in $ctrl.config.bodyTexts track by $index\" ng-if=\"$ctrl.config.bodyTexts.length>0\">{{bodyText.text}}</p>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>"
  );

}]);

(function () {

 	var app = angular.module("wcCardsOverlay",["wcCardsOverlayTemplates"]);

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
