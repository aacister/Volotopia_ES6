class MyFlightsCtrl {
  constructor( Airline, Auth, userResolved ) {
    'ngInject';

    this.user = userResolved;
    this._Airline = Airline;
    this._Auth = Auth;


  }

  isLoggedIn() {
    return this._Auth.isLoggedIn();
  }

  deleteFlight(flight) {
      this._Airline.deleteFlight(this._Auth.currentUserId(), flight._id).success(
        () => {
          this.user.flights = $.grep(this.user.flights, function(e) {
              return e._id != flight._id;
          });

      }).error(

      );
  };

}

export default MyFlightsCtrl;
