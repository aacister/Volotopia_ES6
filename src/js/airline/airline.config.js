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
            return Airline.get($stateParams.id);
        },
        airportsResolved: function(Airport) {
            return Airport.getAll();
        }
    }
  })
  .state('.routes', {
              url: '',
              templateUrl: 'airline/airline-routes.html',
              controller: 'AirlineCtrl',
              controllerAs: '$ctrl',
              data: {
                  activeTab: 'routes'

              },
              resolve: {
                  airlineResolved: ['$stateParams', 'Airline', function($stateParams, Airline) {
                      return Airline.get($stateParams.id);
                  }],
                  airportsResolved: ['Airport', function(Airport) {
                      return Airport.getAll();
                  }]
              }
          })

          .state('.comments', {
              url: '/airlines/{id}/comments',
              templateUrl: 'airline/airline-comments.html',
              controller: 'AirlineCtrl',
              controllerAs: '$ctrl',
              data: {
                  activeTab: 'comments'

              },
              resolve: {
                  airlineResolved: ['$stateParams', 'Airline', function($stateParams, Airline) {
                      return Airline.get($stateParams.id);
                  }],
                  airportsResolved: ['Airport', function(Airport) {
                      return Airport.getAll();
                  }]
              }
          })


};

export default AirlineConfig;
