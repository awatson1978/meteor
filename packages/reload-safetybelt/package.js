Package.describe({
  name: "starrynight:reload-safetybelt",
  summary: "Reload safety belt for multi-server deployments",
  version: '1.0.3'
});

Package.onUse(function (api) {
  api.use("webapp", "server");
  api.addFiles("reload-safety-belt.js", "server");
  api.addFiles("safetybelt.js", "server", { isAsset: true });
});

Package.onTest(function (api) {
  api.addFiles("safetybelt.js", "server", { isAsset: true });
  api.use(["reload-safetybelt", "starrynight:tinytest", "http", "webapp"]);
  api.addFiles("reload-safety-belt-tests.js", "server");
});
