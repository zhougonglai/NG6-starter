class HomeController {
  constructor() {
    this.name = "复兴 Soho 店";

    this.group = [
      {
        icon:"assignment_turned_in",
        space:"订单总量",
        number:1525
      },{
        icon:"alarm_on",
        space:"预约总量",
        number:1525
      },{
        icon:"local_atm",
        space:"交易总量",
        number:1525
      },{
        icon:"attach_money",
        space:"交易金额",
        number:1525
      }
      ];
  }
}

export default HomeController;
