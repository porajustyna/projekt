import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';


import uirouter from 'angular-ui-router';
import routing from './config';
import angularFire from 'angularfire'
import firebase from 'firebase'

import home from './features/home';

const ngModule = angular
        .module('app', [
            uirouter,
            home,
            angularFire,
            ])
.config(routing);