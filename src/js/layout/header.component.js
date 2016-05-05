class AppHeaderCtrl {
  constructor(AppConstants, Airline, Auth, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._Airline = Airline;
    this._Auth = Auth;
    this.airlines = [];
    this._error ='';
    this._$state = $state; 

  }


    activeLink(n) {
        return (this._$state.is(n) ? "active" : "");
    }

    getAirlines() {
        this._Airline.getAll().success(
          (airlines) => {
            this.airlines = airlines;
        });

    }

    googleLogIn() {
        this._Auth.googleLogIn().error(
          (error) => {
            this._error = error;
        }).then(() => {
            this._$state.go('app.home');
        });
    }

    isLoggedIn() {
      return this._Auth.isLoggedIn();
    }

    currentUser() {
      return this._Auth.currentUser();
    }

    logOut(){
      this._Auth.logOut();
    }


}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html',
  controllerAs: '$ctrl'
};

export default AppHeader;
