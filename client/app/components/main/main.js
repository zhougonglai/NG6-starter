import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component';

let mainModule = angular.module('main', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/main/home');

  $stateProvider
      .state('main', {
        url: '/main',
        component: 'main',
        abstract:true
      });
})

.component('main', mainComponent)

.name;

export default mainModule;
