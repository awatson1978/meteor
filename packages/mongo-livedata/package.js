Package.describe({
  name: "starrynight:mongo-livedata",
  summary: "Moved to the 'mongo' package",
  version: '1.0.8'
});

Package.onUse(function (api) {
  api.imply("mongo");
});
