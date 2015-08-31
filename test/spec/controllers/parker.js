'use strict';

describe('Controller: ParkerCtrl', function () {

  // load the controller's module
  beforeEach(module('parkerBarkerApp'));

  var ParkerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParkerCtrl = $controller('ParkerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ParkerCtrl.awesomeThings.length).toBe(3);
  });
});
