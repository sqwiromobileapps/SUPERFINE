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
  // SDK56: getDefaultConfig leaves transformer.assetPlugins empty here, which makes eas-cli's
  // managed-workflow check warn ("custom metro.config.js that does not extend @expo/metro-config")
  // and interactively prompt to abort. Add the standard expo-asset hashAssetFiles plugin so the
  // check passes AND assets are content-hashed in the production bundle.
  assetPlugins: [
    ...((defaultConfig.transformer && defaultConfig.transformer.assetPlugins) || []),
    'expo-asset/tools/hashAssetFiles',
  ],
};

defaultConfig.resolver = {
  ...defaultConfig.resolver,
  assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
};





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

// @expocraft/baseui (M1): NativeWind wraps the FINISHED config, so this stays the last line (it chains
// resolveRequest and the SVG transformer). inlineRem 16 is the helper's default (D-25).
// ---- LINKED @expocraft/baseui (landing, link mode; delete when the host installs baseui from the registry) ----------
// node_modules/@expocraft/baseui links ~/@cloudhub/@expocraft/baseui until the package is published (D-128, D-148).
// Metro only resolves files under watchFolders, so watch the link's real folder, and block baseui's own node_modules
// so react-native, reanimated and css-interop resolve from this host only, except @gorhom/bottom-sheet (5.2.14), which
// a published baseui nests (D-153). This is the baseui half of the old worktree-only Metro block, kept on purpose.
{
  const fs = require('fs');
  const link = path.join(__dirname, 'node_modules/@expocraft/baseui');
  if (fs.existsSync(link) && fs.lstatSync(link).isSymbolicLink()) {
    const baseuiRoot = fs.realpathSync(link);
    const esc = (s) => s.replace(/[/\\^$*+?.()|[\]{}]/g, '\\$&');
    defaultConfig.watchFolders.push(baseuiRoot);
    // Files outside this host (appcore, the apps) resolve baseui through extraNodeModules, whose module map skips
    // symlinked entries, so name the link's real folder there.
    defaultConfig.resolver.extraNodeModules = { ...defaultConfig.resolver.extraNodeModules, '@expocraft/baseui': baseuiRoot };
    defaultConfig.resolver.blockList = [].concat(
      defaultConfig.resolver.blockList || [],
      new RegExp(esc(path.join(baseuiRoot, 'node_modules')) + '/(?!@gorhom(?:$|/bottom-sheet(?:$|/))).*')
    );
  }
}
// ---- end LINKED @expocraft/baseui -----------------------------------------------------------------------------------

const { withBaseui } = require('@expocraft/baseui/config/metro');
module.exports = withBaseui(defaultConfig, { input: './global.css' });
