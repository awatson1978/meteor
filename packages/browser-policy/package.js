Package.describe({
  name: "starrynight:browser-policy",
  summary: "Configure security policies enforced by the browser",
  version: "1.0.4"
});

Package.onUse(function (api) {
  api.use(['browser-policy-content', 'browser-policy-framing'], 'server');
  api.imply(['browser-policy-common'], 'server');
});

Package.onTest(function (api) {
  api.use(["starrynight:tinytest", "browser-policy", "ejson"], "server");
  api.addFiles("browser-policy-test.js", "server");
});
