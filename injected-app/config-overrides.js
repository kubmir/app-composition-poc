const { override, addWebpackPlugin } = require("customize-cra");

const WebpackAssetsManifest = require("webpack-assets-manifest");

module.exports = override(
  // enable legacy decorators babel plugin
  addWebpackPlugin(
    new WebpackAssetsManifest({
      // Options go here
    })
  )
);
