import angular from 'angular';

// Create the module where our functionality can attach to
let homeModule = angular.module('app.home', []);

import HomeConfig from './home.config';
homeModule.config(HomeConfig);


// Controllers
import HomeCtrl from './home.controller';
homeModule.controller('HomeCtrl', HomeCtrl);


export default homeModule;