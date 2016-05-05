export default class Airport{
  constructor(AppConstants, $http, $q){
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
    this.airports = [];
  }

  getAll() {
      return this._$http.get(this.AppConstants.api + '/airports').success(
        (res) => {res.data}).error(
          (err) => {err;}
        );
  };

}
