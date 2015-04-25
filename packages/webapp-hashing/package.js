Package.describe({
  name: "starrynight:webapp-hashing",
  summary: "Used internally by WebApp. Knows how to hash programs from manifests.",
  version: "1.0.3"
});

Package.onUse(function(api) {
  api.use('underscore', 'server');
  api.addFiles('webapp-hashing.js', 'server');
  api.export('WebAppHashing');
});

Package.onTest(function(api) {
  api.use('clinical:tinytest');
  api.use('webapp-hashing');
});
