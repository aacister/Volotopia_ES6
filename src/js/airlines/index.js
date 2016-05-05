import angular from 'angular';

let airlinesModule = angular.module('app.airlines', []);

import AirlinesConfig from './airlines.config';
airlinesModule.config(AirlinesConfig);

// Controllers
import AirlinesCtrl from './airlines.controller';
airlinesModule.controller('AirlinesCtrl', AirlinesCtrl);

export default airlinesModule;
