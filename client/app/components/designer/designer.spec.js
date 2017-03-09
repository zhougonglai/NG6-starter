import DesignerModule from './designer'
import DesignerController from './designer.controller';
import DesignerComponent from './designer.component';
import DesignerTemplate from './designer.html';

describe('Designer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DesignerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DesignerController();
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
      expect(DesignerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DesignerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DesignerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DesignerController);
      });
  });
});
