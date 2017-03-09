import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storeComponent from './store.component';
import StoreDecoration from './storeDecoration/storeDecoration';
import StoreInfo from './storeInfo/storeInfo';
import StoreSet from './storeSet/storeSet';

let storeModule = angular.module('store', [
  uiRouter,StoreDecoration,StoreInfo,StoreSet
])
.config(($stateProvider) => {
      "ngInject";

      $stateProvider
          .state('main.store', {
            url: '/store',
            component: 'store',
            abstract:true
          });
    })
.component('store', storeComponent)

.name;

export default storeModule;
