import StoreDecorationModule from './storeDecoration'
import StoreDecorationController from './storeDecoration.controller';
import StoreDecorationComponent from './storeDecoration.component';
import StoreDecorationTemplate from './storeDecoration.html';

describe('StoreDecoration', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StoreDecorationModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StoreDecorationController();
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
      expect(StoreDecorationTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StoreDecorationComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(StoreDecorationTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(StoreDecorationController);
      });
  });
});
