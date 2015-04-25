Package.describe({
  // These tests can't be directly in the underscore packages since
  // Tinytest depends on underscore
  name: "starrynight:underscore-tests",
  summary: "Tests for the underscore package",
  version: '1.0.3'
});

Package.onTest(function (api) {
  api.use(['clinical:tinytest', 'underscore']);
  api.addFiles('each_test.js');
});
