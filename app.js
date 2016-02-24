var app = angular.module('starwars', ['ui.router']);

app.config(["$stateProvider", "$urlRouterProvider", 

    function($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/cards');
         
        $stateProvider
            .state('cards', {  //all of the cards
                url: '/cards',
                templateUrl: 'views/cards.html',
                controller: 'CardsCtrl'
            })
            .state('hero', {   //hero detail page
                url: '/hero',
                templateUrl: 'views/hero.html',
                controller: ''                
            })
        
}]); //end config