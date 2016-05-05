import angular from 'angular';

let myFlightsModule = angular.module('app.myFlights', []);

import MyFlightsConfig from './myFlights.config';
myFlightsModule.config(MyFlightsConfig);

// Controllers
import MyFlightsCtrl from './myFlights.controller';
myFlightsModule.controller('MyFlightsCtrl', MyFlightsCtrl);

export default myFlightsModule;
