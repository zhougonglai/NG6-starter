import StoreInfoModule from './storeInfo'
import StoreInfoController from './storeInfo.controller';
import StoreInfoComponent from './storeInfo.component';
import StoreInfoTemplate from './storeInfo.html';

describe('StoreInfo', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StoreInfoModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StoreInfoController();
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
      expect(StoreInfoTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StoreInfoComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(StoreInfoTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(StoreInfoController);
      });
  });
});
