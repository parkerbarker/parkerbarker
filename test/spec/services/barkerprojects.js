'use strict';

describe('Service: barkerProjects', function () {

  // load the service's module
  beforeEach(module('parkerBarkerApp'));

  // instantiate service
  var barkerProjects;
  beforeEach(inject(function (_barkerProjects_) {
    barkerProjects = _barkerProjects_;
  }));

  it('should do something', function () {
    expect(!!barkerProjects).toBe(true);
  });

});
