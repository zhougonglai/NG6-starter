import NavdrawerModule from './navdrawer'
import NavdrawerController from './navdrawer.controller';
import NavdrawerComponent from './navdrawer.component';
import NavdrawerTemplate from './navdrawer.html';

describe('Navdrawer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NavdrawerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NavdrawerController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(NavdrawerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NavdrawerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NavdrawerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NavdrawerController);
      });
  });
});
