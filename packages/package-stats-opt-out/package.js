Package.describe({
  name: "starrynight:package-stats-opt-out",
  summary: "Opt out of sending package stats",
  version: '1.0.3'
});

Package.onUse(function (api) {
  // Empty. This package's presence tells the meteor tool to stop
  // sending package stats.
});
