Package.describe({
  name: "starrynight:standard-app-packages",
  summary: "Moved to meteor-platform",
  version: '1.0.5'
});

Package.onUse(function (api) {
  api.imply("meteor-platform");
});
