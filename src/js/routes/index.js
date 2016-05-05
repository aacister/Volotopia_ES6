import angular from 'angular';

let routesModule = angular.module('app.routes', []);

import RoutesConfig from './routes.config';
routesModule.config(RoutesConfig);

// Controllers
import RoutesCtrl from './routes.controller';
routesModule.controller('RoutesCtrl', RoutesCtrl);

export default routesModule;
