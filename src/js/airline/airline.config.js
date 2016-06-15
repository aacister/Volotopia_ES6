function AirlineConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.airline', {
    abstract: true,
    url: '/airlines/{id}',
    controller: 'AirlineCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'airline/airline.html',
    resolve: {
        airlineResolved: function($stateParams, Airline) {
            return Airline.get($stateParams.id).then(
              (airline) => airline,
              (err) => $state.go('app.home')
            );
        },
        airportsResolved: function(Airport) {
            return Airport.getAll().then(
              (airports) => airports,
              (err) => $state.go('app.home')
            );
        }
    }
  })
  .state('airline.routes', {
              url: '',
              templateUrl: '/airline-routes.html',
              controller: 'AirlineCtrl',
              controllerAs: '$ctrl',
              data: {
                  activeTab: 'routes'

              },
              resolve: {
                  airline: ['$stateParams', 'Airline', function($stateParams, Airline) {
                      return Airline.get($stateParams.id);
                  }],
                  airportsResolved: ['Airport', function(Airport) {
                      return Airport.getAll();
                  }]
              }
          })

          .state('airline.comments', {
              url: '/airlines/{id}/comments',
              templateUrl: '/airline-comments.html',
              controller: 'AirlineCtrl',
              controllerAs: '$ctrl',
              data: {
                  activeTab: 'comments'

              },
              resolve: {
                  airline: ['$stateParams', 'Airline', function($stateParams, Airline) {
                      return Airline.get($stateParams.id);
                  }],
                  airportsResolved: ['Airport', function(Airport) {
                      return Airport.getAll();
                  }]
              }
          })


};

export default AirlineConfig;
