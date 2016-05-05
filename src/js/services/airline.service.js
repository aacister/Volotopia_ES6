export default class Airline{
  constructor(AppConstants, $http, $q){
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;

  }

  get(id) {

      return this._$http.get(this._AppConstants.api + '/airlines/' + id).then(
        (res) => {
          return res.data;
      }).error(
        (err) => {err;}
      );

  }


  getAll() {
      return this._$http.get(this._AppConstants.api + '/airlines').success(
        (res) => {res.data;}
      ).error(
        (err) => {err;}
      );
  }

  incrementRatings(airline) {
      return this_$http.put(this._AppConstants.api + '/airlines/' + airline._id + '/uprate', null, {
      }).success(
        (res) => {res.data}).error(
          (err) => {err;}
        );
  }


  upvoteComment(airline, comment) {

      return this._$http.put(this._AppConstants.api + '/airlines/' + airline._id + '/comments/' + comment._id + '/upvote', null, {
      }).success((res) => {res.data}).error(
        (err) => {err;}
      );
  }

  addComment(id, comment) {
      return this._$http.post(this._AppConstants.api + '/airlines/' + id + '/comments', comment, {
      }).success(
      (res) => {res.data;}
      ).error(
        (err) => {err;}
      )
  }

  addRoute(id, route) {
      return this._$http.post(this._AppConstants.api + '/airlines/' + id + '/routes', route, {
      }).success(
        (res) => {res.data;}
      ).error(
        (err) => {err;}
      );
  }

  editRoute(id, route) {

      return this._$http.put(this._AppConstants.api + '/routes/' + id, route, {
      }).success(
        (res) => {res.data;}
      ).error(
        (err) => {err;}
      );
  }

  deleteRoute(id) {
      return this._$http.delete(this._AppConstants.api + '/routes/' + id, {
      });
  }

  bookRoute(id, route) {

      return this._$http.put(this._AppConstants.api + '/user/' + id + '/routes/' + route._id + '/book', route, {
      }).success(
        (res)=>{res.data;}
      ).error(
        (err) => {err;}
      )
  }

  deleteFlight(userId, routeId) {
      return this._$http.delete(this._AppConstants.api + '/user/' + userId + '/routes/' + routeId, {
      });
  }

}
