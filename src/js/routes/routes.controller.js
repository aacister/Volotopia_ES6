class RoutesCtrl {
  constructor( airlinesResolved, Route, Airline, Auth) {
    'ngInject';



  //  this.airports = airportsResolved;
  console.log(airlinesResolved.data);
    this._airlines = angular.copy(airlinesResolved.data);
    this._routes = this.getRoutes();
    this._Route = Route;
    this._Airline = Airline;
    this.searchResultsVisible = true;
    this._Auth = Auth;

  }

  isSearchResultsVisible()
  {
    return this.searchResultsVisible;
  }

  isLoggedIn() {
    return this._Auth.isLoggedIn();
  }

  getRoutes()
  {
                let routes = [];
                let x;
                for (x = 0; x < this._airlines.length; x++) {
                    let airline = this._airlines[x];
                    let i;
                    for (i = 0; i < airline.routes.length; i++) {
                        let route = airline.routes[i];
                        routes.push(route);
                    }
                }
                return routes;
  }

  bookFlight(route) {
      this._Airline.bookRoute(this._Auth.currentUserId(), route).success(
        (route) => {

          this._routes = $.grep(this._routes, function(e) {
              return e._id != route._id;
          });
          this._routes.push(route);

      }).error(

      );
  };

}

export default RoutesCtrl;
