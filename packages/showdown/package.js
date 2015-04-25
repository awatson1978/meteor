Package.describe({
  name: "starrynight:showdown",
  summary: "Moved to the 'markdown' package",
  version: '1.0.4'
});

Package.onUse(function (api) {
  api.imply("markdown");
});
