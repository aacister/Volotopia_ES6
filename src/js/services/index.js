import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// Services
import AirlineService from './airline.service';
servicesModule.service('Airline', AirlineService);

import AirportService from './airport.service';
servicesModule.service('Airport', AirportService);

import RouteService from './route.service';
servicesModule.service('Route', RouteService);

import AuthService from './auth.service';
servicesModule.service('Auth', AuthService);




export default servicesModule;
