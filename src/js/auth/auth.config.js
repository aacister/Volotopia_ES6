function AuthConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.login', {
    url: '/login',
    controller: 'AuthCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'auth/login.html',
    resolve: {
      isAuth: function(Auth) {
          return Auth.isLoggedIn();
      }
    }

  })
  .state('app.register', {
      url: '/register',
      templateUrl: 'auth/register.html',
      controller: 'AuthCtrl',
      resolve: {
        isAuth: function(Auth) {
            return Auth.isLoggedIn();
        }
      }
  })
  .state('app.google', {
      url: '/profile',
//      templateUrl: '/auth/profile.html',
      controller: 'AuthCtrl',
      onEnter: function($state, Auth, $location) {
          if ($location.search().token) {
              Auth.saveToken($location.search().token);
          }
          if (!Auth.isLoggedIn()) {
          //    $state.go("app.home");
          }
          else {
          //  $state.go("app.home");
          }


      },
      resolve: {
          userResolved: function(Auth) {
              return Auth.getCurrentUser();
          }
      }
  })

};

export default AuthConfig;
