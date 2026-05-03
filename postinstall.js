let sqwiroConfig = {};

try {
  sqwiroConfig = require('../SQWIRO_SCRIPTS/sqwiro.config.js');
} catch (error) {
  console.log('Error loading sqwiro.config.js', error);
  //
}
// eslint-disable-next-line
(async () => {
  if (sqwiroConfig.postinstall) {
    await sqwiroConfig.postinstall();

    await sqwiroConfig.updateAndroidFiles({
      appName: 'SUPERFINE',
      VersionCode: 21,
      PreviosVersions: [1, 21],
    });
  }
})();
