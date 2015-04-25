Package.describe({
  name: "starrynight:htmljs",
  summary: "Small library for expressing HTML trees",
  version: '1.0.4'
});

Package.onUse(function (api) {
  api.use('deps');
  api.export('HTML');

  api.addFiles(['preamble.js',
                 'visitors.js',
                 'html.js']);
});

Package.onTest(function (api) {
  api.use('htmljs');
  api.use('html-tools');
  api.use('clinical:tinytest');
  api.use('underscore');
  api.addFiles(['htmljs_test.js']);
});
