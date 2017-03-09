import StoreSetModule from './storeSet'
import StoreSetController from './storeSet.controller';
import StoreSetComponent from './storeSet.component';
import StoreSetTemplate from './storeSet.html';

describe('StoreSet', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StoreSetModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StoreSetController();
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
      expect(StoreSetTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StoreSetComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(StoreSetTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(StoreSetController);
      });
  });
});
