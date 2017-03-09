import angular from 'angular';
import uiRouter from 'angular-ui-router';
import designerComponent from './designer.component';

let designerModule = angular.module('designer', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('main.designer', {
      url: '/designer',
      component: 'designer'
    });
})
.component('designer', designerComponent)

.name;

export default designerModule;
