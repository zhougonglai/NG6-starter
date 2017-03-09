import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storeSetComponent from './storeSet.component';

let storeSetModule = angular.module('storeSet', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";

    $stateProvider
    .state('main.store.set', {
      url: '/set',
      component: 'storeSet'
    });
})
.component('storeSet', storeSetComponent)

.name;

export default storeSetModule;
