import angular from 'angular';

let airlineModule = angular.module('app.airline', []);

import AirlineConfig from './airline.config';
airlineModule.config(AirlineConfig);

// Controllers
import AirlineCtrl from './airline.controller';
airlineModule.controller('AirlineCtrl', AirlineCtrl);

export default airlineModule;
