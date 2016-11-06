'use strict';

describe('Controller: CreativeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTranslateApp'));

  var CreativeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreativeCtrl = $controller('CreativeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
