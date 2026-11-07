/* eslint-env node */
const PATH = require('path');

const extractExtraNodeModules = require('./extract-extra-node-modules');
const appMapping = require('../app-mapping.js');
module.exports = function extractLinkedPackages(repoDir) {
  // Map containing linked packages and their real paths
  const linkedPackages = {
    '@sqwiro/app': PATH.resolve(__dirname, '../src/@sqwiro/app'),
    ...appMapping,
  };

  const appcorePackage = linkedPackages['@sqwiro/appcore'];

  // M4: core56 (@expocraft/core) is retired, so nothing is linked for it and none of its node_modules needs blocking.
  // MOB-250 (F-2091): graphql and media-console resolve from the host's own node_modules, at their locked versions, like
  // every other dependency; linking them to the local checkouts put a second graphql copy in the bundle once MOB-248
  // dropped the babel aliases.
  const alternateRoots = [appcorePackage].filter(Boolean);
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
