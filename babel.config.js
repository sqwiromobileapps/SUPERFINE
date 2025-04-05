const iconPlugins = require('@expocraft-icons/chub/babel-plugins');
const path = require('path');
const appMapping = require('./app-mapping.js');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo']],
    plugins: [
      'react-native-reanimated/plugin',
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
            '@sqwiro/app': path.resolve(__dirname, './@sqwiro/app'),
            '@expocraft/core': '/Users/bernardgaitho/@cloudhub/@expocraft/core',
            '@expocraft/react-native-media-console':
              '/Users/bernardgaitho/@cloudhub/@expocraft/react-native-media-console',
            '@cloudhub-ux/graphql':
              '/Users/bernardgaitho/@cloudhub/@cloudhub-ux/cloudhub-ux-graphql',

            ...appMapping,
          },
        },
      ],
    ],
  };
};
