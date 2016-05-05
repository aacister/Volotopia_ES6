function AirlinesConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.airlines', {
    url: '/airlines',
    controller: 'AirlinesCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'airlines/airlines.html',
    resolve: {
        airlinesResolved: function(Airline) {
            return Airline.getAll();
        }
    }
  });

};

export default AirlinesConfig;
