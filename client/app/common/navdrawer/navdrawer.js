import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navdrawerComponent from './navdrawer.component';
import $ from "jquery";

let navdrawerModule = angular.module('navdrawer', [
  uiRouter
])
.config(($urlRouterProvider)=>{
  "ngInject";

  $urlRouterProvider.when('/main/store/set',()=>{
    $("#store").addClass("active");
  });

  $urlRouterProvider.when('/main/store/info',()=>{
    $("#store").addClass("active");
  });
})
.component('navdrawer', navdrawerComponent)

.name;

export default navdrawerModule;
