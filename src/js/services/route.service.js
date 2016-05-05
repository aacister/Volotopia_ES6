export default class Route{
  constructor(AppConstants, $http, $q){
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;

  }

  get(id) {
    return this._$http.get(this._AppConstants.api + '/routes/' + id).success(
      (res) => {
        return res.data;
    }).error(
      (err) => {err;}
    );
  }

  getAll() {
      return this._$http.get(this._AppConstants.api + '/routes').success(
        (res) => {res.data;}).error(
          (err) => {err;}
        );
  }
}
