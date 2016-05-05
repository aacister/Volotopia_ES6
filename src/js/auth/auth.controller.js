class AuthCtrl {
  constructor($state, Auth, isAuth ) {
    'ngInject';

    this._$state = $state;
    this._Auth = Auth;
    this.user = {};
    this.error = '';

    if(isAuth)
    {
      this._$state.go('app.home');
    }
  }

  register() {
      this._Auth.register(this.user).error(
        (error) => {
          console.log(error);
      }).then(
        () => {
          this._$state.go('app.home');
      });
  }

  logIn() {
      this._Auth.logIn(this.user).error(
        (error) => {
          console.log(error);
      }).then(
        () => {
          this._$state.go('app.home');
      });
  }

}

export default AuthCtrl;
