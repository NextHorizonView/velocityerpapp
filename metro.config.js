const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Define SVG support configuration
const svgConfig = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
  },
};

// Merge configurations
const config = mergeConfig(defaultConfig, svgConfig);

module.exports = wrapWithReanimatedMetroConfig(
  withNativeWind(config, { input: "./global.css" })
);
