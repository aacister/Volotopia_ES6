export default class Airport{
  constructor(AppConstants, $http, $q){
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
    this.airports = [];
  }

  getAll() {
      return this._$http.get(this._AppConstants.api + '/airports').success(
        (res) => {
          console.log('Successful airport grab.');
          return res.data;
        }).error(
          (err) => {
            console.log('Error retrieving airports.');
            return err;}
        );
  };

}
