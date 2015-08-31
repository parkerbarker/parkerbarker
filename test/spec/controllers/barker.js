'use strict';

describe('Controller: BarkerCtrl', function () {

  // load the controller's module
  beforeEach(module('parkerBarkerApp'));

  var BarkerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarkerCtrl = $controller('BarkerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BarkerCtrl.awesomeThings.length).toBe(3);
  });
});
