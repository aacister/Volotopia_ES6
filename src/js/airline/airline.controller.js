class AirlineCtrl {
  constructor($state, Auth, Airline, airlineResolved, airportsResolved) {
    'ngInject';

    this._$state = $state;
    this._Auth = Auth;
    this.airline = airlineResolved.data;
    this.airports = airportsResolved.data;
    this._Airline = Airline;


    this.isAddComment = false;
    this.isAddRouteVisible = false;
    this.isEditRouteVisible = false;
    this.editableRoute = {};
    this.isLoggedIn = this._Auth.isLoggedIn;

    this.commentFormData = {};
    this.addRouteFormData = {};

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
          body: this.commentFormData.body,
          upvotes: 0
      }).success(
        (comment) => {
          this.airline.comments.push(comment);
      });
      this.commentFormData.body = '';
      this.isAddComment = false;
  }

  showAddComment() {
      return this.isAddComment;
  }

  addCommentClicked() {
      this.isAddComment = true;
  }

  removeCommentClicked() {
      $this.isAddComment = false;
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
      if (this.addRouteFormData.departureAirport === '' || this.addRouteFormData.departureDateTime === '' || this.addRouteFormData.arrivalAirport === '' || this.addRouteFormData.arrivalDateTime === '' || this.addRouteFormData.price === '' || this.addRouteFormData.occupied === '' || this.addRouteFormData.capacity === '') {
          return;
      }

      var duration = getDuration(this.addRouteFormData.departureDateTime, this.addRouteFormData.arrivalDateTime);

      Airline.addRoute(this.airline._id, {
          departureAirport: this.addRouteFormData.departureAirport,
          departureDateTime: this.addRouteFormData.departureDateTime,
          duration: this.addRouteFormData.duration,
          arrivalDateTime: this.addRouteFormData.arrivalDateTime,
          arrivalAirport: this.addRouteFormData.arrivalAirport,
          price: this.addRouteFormData.price,
          occupied: this.addRouteFormData.occupied,
          capacity: this.addRouteFormData.capacity
      }).success(
        (route) => {
          this.airline.routes.push(route);
      });
      this.addRouteFormData.departureAirport = '';
      this.addRouteFormData.departureDateTime = '';
      this.addRouteFormData.duration = '';
      this.addRouteFormData.arrivalAirport = '';
      this.addRouteFormData.arrivalDateTime = '';
      this.addRouteFormData.price = '';
      this.addRouteFormData.occupied = '';
      this.addRouteFormData.capacity = '';
      this.isAddRouteVisible = false;
  }

  showAddRoute() {
      return this.isAddRouteVisible;
  }

  addRouteClicked() {
      this.isAddRouteVisible = true;
  }

  removeRouteClicked() {
      this.isAddRouteVisible = false;
  }

  hideEditRouteForm() {
      this.isEditRouteVisible = false;
  }

  showEditRoute(route) {
      this.isEditRouteVisible = true;
      this.editableRoute = angular.copy(route);

  }



  deleteRoute(route) {
      this._Airline.deleteRoute(route._id).success(
        () => {
          this.airline.routes = $.grep(this.airline.routes, function(e) {
              return e._id != route._id;
          });
      });
  }

}

export default AirlineCtrl;
