import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storeDecorationComponent from './storeDecoration.component';

let storeDecorationModule = angular.module('storeDecoration', [
  uiRouter
])
.config(($stateProvider) => {
      "ngInject";



      $stateProvider
      .state('main.store.decoration', {
        url: '/decoration',
        component: 'storeDecoration'
      });
})
.component('storeDecoration', storeDecorationComponent)

.name;

export default storeDecorationModule;
