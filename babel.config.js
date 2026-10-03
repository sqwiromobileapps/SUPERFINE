const iconPlugins = require('@expocraft-icons/chub/babel-plugins');
const path = require('path');
const appMapping = require('./app-mapping.js');
// @expocraft/baseui (M1): babel-preset-expo with jsxImportSource 'nativewind', plus nativewind/babel.
const { baseuiBabelPresets } = require('@expocraft/baseui/config/babel');
// M2 (the alias swap): @expocraft/core, @expocraft/rnuilib and react-native-paper resolve to @expocraft/baseui's legacy
// adapter, as the lab's LEGACY_TARGETS do (lab/engine.config.js). App code doesn't change. realpath keeps one module
// identity whether baseui is linked from source or installed. Rollback = these three lines back to core56 (+ --clear).
const BASEUI_LEGACY = path.join(
  require('fs').realpathSync(path.resolve(__dirname, 'node_modules/@expocraft/baseui')),
  'src/legacy'
);

module.exports = function (api) {
  api.cache(true);
  return {
    presets: baseuiBabelPresets(),
    plugins: [
      [
        'babel-plugin-transform-imports',
        {
          '@expocraft-icons/mdi': {
            transform: '@expocraft-icons/mdi/${member}',
            preventFullImport: true,
          },
          '@expocraft-icons/chub': {
            transform: '@expocraft-icons/chub/${member}',
            preventFullImport: true,
          },
          '@expocraft-icons/flat-color-icons': {
            transform: '@expocraft-icons/flat-color-icons/${member}',
            preventFullImport: true,
          },
          '@expocraft-icons/noto': {
            transform: '@expocraft-icons/noto/${member}',
            preventFullImport: true,
          },
        },
      ],

      ...iconPlugins,
      [
        'module-resolver',
        {
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            'react-native': path.resolve(
              __dirname,
              './node_modules/react-native'
            ),
            '@sqwiro/app': path.resolve(__dirname, './src/@sqwiro/app'),
            '@expocraft/core': path.join(BASEUI_LEGACY, 'core'), // was core56 (M2)
            '@expocraft/rnuilib': path.join(BASEUI_LEGACY, 'rnuilib'), // M2
            'react-native-paper': path.join(BASEUI_LEGACY, 'paper'), // M2
            '@expocraft/react-native-media-console':
              '/Users/bernardgaitho/@cloudhub/@expocraft/react-native-media-console',
            '@cloudhub-ux/graphql':
              '/Users/bernardgaitho/@cloudhub/@cloudhub-ux/graphql',

            ...appMapping,
          },
        },
      ],
    ],
  };
};
