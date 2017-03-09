import angular from 'angular';
import Navbar from './navbar/navbar';
import Navdrawer from './navdrawer/navdrawer';
import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Navdrawer
])
  
.name;

export default commonModule;
