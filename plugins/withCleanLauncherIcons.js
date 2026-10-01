// Defensive: removes a duplicate launcher-icon .png when its .webp twin exists in the
// same mipmap-* folder. expo prebuild emits .webp launcher icons; a stray hand-committed
// .png with the same basename causes a duplicate-resource :app:mergeResources failure.
// Only ever deletes a .png that has a .webp sibling, so it can never remove the only icon.
const { withDangerousMod, createRunOncePlugin } = require('expo/config-plugins');
const fs = require('fs');
const path = require('path');

const BASENAMES = ['ic_launcher', 'ic_launcher_round', 'ic_launcher_foreground'];

const withCleanLauncherIcons = (config) =>
  withDangerousMod(config, [
    'android',
    (cfg) => {
      const resDir = path.join(cfg.modRequest.platformProjectRoot, 'app', 'src', 'main', 'res');
      if (!fs.existsSync(resDir)) return cfg;
      for (const ent of fs.readdirSync(resDir, { withFileTypes: true })) {
        if (!ent.isDirectory() || !ent.name.startsWith('mipmap-')) continue;
        const mdir = path.join(resDir, ent.name);
        for (const base of BASENAMES) {
          const png = path.join(mdir, base + '.png');
          const webp = path.join(mdir, base + '.webp');
          if (fs.existsSync(png) && fs.existsSync(webp)) {
            fs.unlinkSync(png);
            console.log(`[withCleanLauncherIcons] removed duplicate ${ent.name}/${base}.png`);
          }
        }
      }
      return cfg;
    },
  ]);

module.exports = createRunOncePlugin(withCleanLauncherIcons, 'withCleanLauncherIcons', '1.0.0');
