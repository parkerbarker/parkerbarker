'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('parkerBarkerApp'));

  var HomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('expect hayley to be available', function(){
    expect(scope.hayley.name).toBe('parker');
  })
});
