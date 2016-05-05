export default class Auth{
  constructor(AppConstants, $http, $window, $state){
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$state = $state;
    this._$window = $window;

  }

  get(id) {

      return this._$http.get(this._AppConstants.api + '/airlines/' + id).then(
        (res) => {
          return res.data;
      }).error(
        (err) => {err;}
      );

  }

  saveToken(token) {
      this._$window.localStorage['volotopia-token'] = token;
  }

  getToken() {
      return this._$window.localStorage['volotopia-token'];
  }

  isLoggedIn() {
      var token = this.getToken();

      if (token) {
          var payload = JSON.parse(this._$window.atob(token.split('.')[1]));

          return payload.exp > Date.now() / 1000;
      } else {
          return false;
      }
  }

  getCurrentUser() {
      if (this.isLoggedIn()) {
          var token = this.getToken();
          var payload = JSON.parse(this._$window.atob(token.split('.')[1]));

          var id = payload._id;
          return this._$http.get(this._AppConstants.api + '/users/' + id).then(
          (res) => {
              return res.data;
          });
      }
  }

  currentUserId() {
      if (this.isLoggedIn()) {
          var token = this.getToken();
          var payload = JSON.parse(this._$window.atob(token.split('.')[1]));

          return payload._id;
      }
  }


  currentUser() {
      if (this.isLoggedIn()) {
          var token = this.getToken();
          var payload = JSON.parse(this._$window.atob(token.split('.')[1]));

          return payload.username;
      }
  }

  register(user) {
      return this._$http.post(this._AppConstants.api + '/register', user).success(
        (data) => {
          this.saveToken(data.token);
      });
  }

  logIn(user) {
      return this._$http.post(this._AppConstants.api + '/login', user).success(
        (data) => {
          this.saveToken(data.token);
      });
  }

  logOut() {
      this._$window.localStorage.removeItem('volotopia-token');
      this._$state.go('app.login');
  }

  googleLogIn() {
      return this._$http.get(this._AppConstants.api + '/auth/google').success(
        (data) => {
          this.saveToken(data.token);
      });


  }
}
