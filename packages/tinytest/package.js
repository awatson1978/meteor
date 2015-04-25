Package.describe({
  name: "starrynight:tinytest",
  summary: "Tiny testing framework",
  version: '1.1.6'
});



Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use('underscore', ['client', 'server']);
  api.use('random', ['client', 'server']);
  api.use('ddp', ['client', 'server']);
  api.use('mongo', ['client', 'server']);
  api.use('check');

  api.addFiles('model.js', ['client', 'server']);
  api.addFiles('tinytest.js', ['client', 'server']);
  api.addFiles('test.js', ['client', 'server']);
  api.addFiles('tinytest_client.js', 'client');
  api.addFiles('tinytest_server.js', 'server');

  api.export('clinical:tinytest');
  api.export('MyTest');
});
