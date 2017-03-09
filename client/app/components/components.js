import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Main from "./main/main";
import Store from "./store/store";
import Designer from './designer/designer';

let componentModule = angular.module('app.components', [
  Main, Home, About, Store,Designer
])

.name;

export default componentModule;
