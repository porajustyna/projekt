import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

import angularfire from 'angularfire'
import firebase from 'firebase'
import dozrobienia from './directives/dozrobienia';
import logowanie from './directives/logowanie';

export default angular.module('app.home', [uirouter, angularfire])
  .config(routing)
  .controller('HomeController', HomeController)
  .directive('dozrobienia', dozrobienia)
  .directive('logowanie', logowanie)
.name;