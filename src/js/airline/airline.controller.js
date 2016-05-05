class AirlineCtrl {
  constructor($state, Auth, Airline, airlineResolved, airportsResolved) {
    'ngInject';

    this._$state = $state;
    this._Auth = Auth;
    this._airline = airlineResolved;
    this._airports = airportsResolved;
    this._Airline = Airline;


    this._isAddComment = false;
    this._isAddRouteVisible = false;
    this._isEditRouteVisible = false;
    this._editableRoute = {};
    this._isLoggedIn = this._Auth.isLoggedIn;

  }

  activeLink(n) {
      return (this._$state.is(n) ? "active" : "");
  }

  tabBgColor(goToTab) {
      if (this._$state.current.data.activeTab === goToTab)
          return 'navy';
      else {
          return 'white';
      }
  }

  addComment() {
      if (this._body === '') {
          return;
      }
      this._Airline.addComment(airline._id, {
          body: this._body,
          upvotes: 0
      }).success(
        (comment) => {
          this._airline.comments.push(comment);
      });
      this._body = '';
      this._isAddComment = false;
  }

  showAddComment() {
      return this._isAddComment;
  }

  addCommentClicked() {
      this._isAddComment = true;
  }

  removeCommentClicked() {
      $this._isAddComment = false;
  }

  incrementRatings(airline) {
      this._Airline.incrementRatings(airline);
  }

  incrementUpvotes(comment) {
      this._Airline.upvoteComment(airline, comment);
  }

  getDuration(date1, date2) {
      var ms = moment.utc(date2).diff(moment.utc(date1));
      return moment.duration(ms).asMinutes();

  }

  addRoute() {
      if (this.departureAirport === '' || $scope.departureDateTime === '' || $scope.arrivalAirport === '' || $scope.arrivalDateTime === '' || $scope.price === '' || $scope.occupied === '' || $scope.capacity === '') {
          return;
      }

      var duration = getDuration($scope.departureDateTime, $scope.arrivalDateTime);

      Airline.addRoute(this._airline._id, {
          departureAirport: this._departureAirport,
          departureDateTime: this._departureDateTime,
          duration: this._duration,
          arrivalDateTime: this._arrivalDateTime,
          arrivalAirport: this._arrivalAirport,
          price: this._price,
          occupied: this._occupied,
          capacity: this._capacity
      }).success(
        (route) => {
          this._airline.routes.push(route);
      });
      this._departureAirport = '';
      this._departureDateTime = '';
      this._duration = '';
      this._arrivalAirport = '';
      this._arrivalDateTime = '';
      this._price = '';
      this._occupied = '';
      this._capacity = '';
      this._isAddRouteVisible = false;
  }

  showAddRoute() {
      return this._isAddRouteVisible;
  }

  addRouteClicked() {
      this._isAddRouteVisible = true;
  }

  removeRouteClicked() {
      this._isAddRouteVisible = false;
  }

  hideEditRouteForm() {
      this._isEditRouteVisible = false;
  }

  showEditRoute(route) {
      this._isEditRouteVisible = true;
      this._editableRoute = angular.copy(route);

  }

  saveRoute() {
      var duration = getDuration(this._editableRoute.departureDateTime, this._editableRoute.arrivalDateTime);
      this._editableRoute.duration = duration;
      this._Airline.editRoute(this._editableRoute._id, this._editableRoute)
          .success(
            (route) => {
              this._airline.routes = $.grep(this._airline.routes, function(e) {
                  return e._id != route._id;
              });
              this._airline.routes.push(route);

          });
      this._editableRoute = {};
      this._isEditRouteVisible = false;
  }

  deleteRoute(route) {
      this._Airline.deleteRoute(route._id).success(
        () => {
          this._airline.routes = $.grep(this._airline.routes, function(e) {
              return e._id != route._id;
          });
      });
  }

}

export default AirlineCtrl;
