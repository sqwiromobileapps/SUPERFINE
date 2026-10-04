/* eslint-env node */
const PATH = require('path');

const extractExtraNodeModules = require('./extract-extra-node-modules');
const appMapping = require('../app-mapping.js');
module.exports = function extractLinkedPackages(repoDir) {
  // Map containing linked packages and their real paths
  const linkedPackages = {
    '@expocraft/react-native-media-console':
      '/Users/bernardgaitho/@cloudhub/@expocraft/react-native-media-console',
    '@cloudhub-ux/graphql':
      '/Users/bernardgaitho/@cloudhub/@cloudhub-ux/graphql',
    '@sqwiro/app': PATH.resolve(__dirname, '../src/@sqwiro/app'),
    ...appMapping,
  };

  const graphqlRootPackage = linkedPackages['@cloudhub-ux/graphql'];
  const appcorePackage = linkedPackages['@sqwiro/appcore'];

  // M4: core56 (@expocraft/core) is retired, so nothing is linked for it and none of its node_modules needs blocking.
  const alternateRoots = [appcorePackage, graphqlRootPackage].filter(Boolean);
  const moduleBlacklist = [];

  // Recursively extract node_modules for repoDir and linked packages
  const repoNodeModules = PATH.join(repoDir, 'node_modules');
  const NodeModules = extractExtraNodeModules(repoDir, repoNodeModules);

  return {
    alternateRoots,
    NodeModules,
    linkedPackages,
    moduleBlacklist,
  };
};
