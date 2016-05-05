function AirlineConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.airline', {
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
  });

};

export default AirlineConfig;
