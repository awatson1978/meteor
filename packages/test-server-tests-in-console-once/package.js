Package.describe({
  name: "starrynight:test-server-tests-in-console-once",
  summary: "Run server tests noninteractively, with results going to the console.",
  version: '1.0.3'
});

Package.onUse(function (api) {
  api.use(['clinical:tinytest', 'underscore', 'ejson'], 'server');

  api.addFiles(['server.js'], "server");
});
