import $ from "jquery";

class NavdrawerController {
  constructor() {
    "ngInject";

    this.name = 'navdrawer';

    this.menu = [
      {
        icon:'home',
        name:"主页",
        sref:"home"
      },
      {
        icon:"store",
        name:"我的门店",
        sref:"store.decoration"
      },
      {
        icon:"people",
        name:"设计师管理",
        sref:"designer"
      },
      {
        icon:"alarm",
        name:"预约管理",
        sref:"about"
      },
      {
        icon:"assignment",
        name:"订单管理",
        sref:"about",
        badge:8
      },
      {
        icon:"apps",
        name:"排号管理",
        sref:"about"
      },
      {
        icon:"event_available",
        name:"排班管理",
        sref:"about"
      },
      {
        icon:"people_outline",
        name:"客户管理",
        sref:"about"
      },
      {
        icon:"message",
        name:"消息",
        sref:"about",
        badge:12
      }
    ];

    this.toggleNav = (icon)=>{
      $("#"+icon).siblings().removeClass("active");
      $("#"+icon).addClass("active");
    }

  }
}

export default NavdrawerController;
