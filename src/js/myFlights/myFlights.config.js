function MyFlightsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.myFlights', {
    url: '/myFlights',
    controller: 'MyFlightsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'myFlights/myFlights.html',
    resolve: {
                      userResolved: function(Auth) {
                          return Auth.getCurrentUser();
                      }
    }

  });
}

export default MyFlightsConfig;
