import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storeInfoComponent from './storeInfo.component';

let storeInfoModule = angular.module('storeInfo', [
  uiRouter
])
.config(($stateProvider,$urlRouterProvider) => {
  "ngInject";

  $stateProvider
  .state('main.store.info', {
    url: '/info',
    component: 'storeInfo'
  });
})
.component('storeInfo', storeInfoComponent)

.name;

export default storeInfoModule;
