import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import 'tether/dist/css/tether-theme-arrows-dark.min.css';
import 'tether/dist/css/tether.min.css';
// import 'bootstrap/scss/bootstrap-grid.scss';
// import 'bootstrap/scss/bootstrap-reboot.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

import 'daemonite-material/css/material.min.css';

import "bootstrap";
import 'daemonite-material';

angular.module('app', [
    uiRouter,
    Common,
    Components
])
    .config(($locationProvider) => {
        "ngInject";
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })

    .component('app', AppComponent);
