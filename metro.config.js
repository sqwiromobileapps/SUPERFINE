// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
// const { withNativeWind } = require('nativewind/metro');

const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

/* eslint-env node */
if (true) { // SDK56: babel always rewrites @sqwiro/* + @expocraft/core to external paths, so metro must always resolve them (incl. production builds)
  const PATH = require('path');
  const blacklist = require('metro-config/private/defaults/exclusionList').default;
  const extractLinkedPackages = require('./metro-dev-helpers/extract-linked-packages');

  const projectRoot = PATH.resolve(__dirname);

  const { linkedPackages, NodeModules, moduleBlacklist } =
    extractLinkedPackages(projectRoot);

  defaultConfig.resolver = {
    ...defaultConfig.resolver,
    blockList: blacklist(moduleBlacklist),
    extraNodeModules: {
      ...NodeModules,
      ...linkedPackages,
    },
    useWatchman: false,
  };

  defaultConfig.watchFolders = [projectRoot].concat(
    Object.values(linkedPackages)
  );
}

defaultConfig.transformer = {
  ...defaultConfig.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
};

defaultConfig.resolver = {
  ...defaultConfig.resolver,
  assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
};

defaultConfig.resolver.assetExts.push('cjs');




// SDK56: babel routes @expocraft/core -> core56 (absolute); metro must watch core56 to resolve it.
defaultConfig.watchFolders = [
  ...(defaultConfig.watchFolders || [__dirname]),
  '/Users/bernardgaitho/@cloudhub/@expocraft/core56',
];

// --- SDK56: redirect excluded-native modules to JS no-op stubs so the app boots/runs ---
const __sdk56Stubs = {
  'expo-av': path.resolve(__dirname, 'expo-av-stub.js'),
  'expo-barcode-scanner': path.resolve(__dirname, 'expo-barcode-scanner-stub.js'),
  '@expocraft/cs50-fingerprints': path.resolve(__dirname, 'cs50-fingerprints-stub.js'),
};
const __origResolveRequest = defaultConfig.resolver.resolveRequest;
defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
  if (__sdk56Stubs[moduleName]) return { type: 'sourceFile', filePath: __sdk56Stubs[moduleName] };
  const r = __origResolveRequest || context.resolveRequest;
  return r(context, moduleName, platform);
};

module.exports = defaultConfig;
