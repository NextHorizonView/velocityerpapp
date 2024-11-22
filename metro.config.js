const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const config = mergeConfig(defaultConfig, {
  /* your custom config */
});

module.exports = wrapWithReanimatedMetroConfig(
  withNativeWind(config, { input: "./global.css" })
);
