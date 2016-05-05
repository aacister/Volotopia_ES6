function RoutesConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.routes', {
    url: '/routes',
    controller: 'RoutesCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'routes/routes.html',
    resolve: {
/*      routesResolved: function($state,Route) {
          return Route.getAll().then(
            (routes) => {
              routes;
            },
          (err) => {console.log(err);}
          );
      },
     airportsResolved: function($state,Airport) {
          return Airport.getAll().then(
            (airports) => airports,
          (err) => {console.log(err);}
          );
      }, */
      airlinesResolved: function($state,Airline) {
          return Airline.getAll().then(
            (airlines) => { return airlines;},
          (err) => {console.log(err);}
          );
      }

    }
  });

};

export default RoutesConfig;
