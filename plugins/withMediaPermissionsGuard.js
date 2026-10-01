// Guards against the Google Play "Photo and Video Permissions" policy violation:
// READ_MEDIA_IMAGES / READ_MEDIA_VIDEO must NEVER ship in a manifest (JOHNMARK 56.6
// and 56.9 were both rejected for this). Library plugins inject these permissions
// during prebuild, so a plain manifest hand-edit does not survive. This plugin runs
// last (wired after everything else in app.json) and:
//   1. Fails prebuild loudly if expo.android.blockedPermissions does not cover the
//      banned permissions (config drift guard).
//   2. Strips any plain declarations of the banned permissions from the final
//      manifest and forces tools:node="remove" entries (idempotent), so the merged
//      manifest strips them from library manifests too — belt and braces on top of
//      blockedPermissions.
const { withAndroidManifest, createRunOncePlugin } = require('expo/config-plugins');

const BANNED = [
  'android.permission.READ_MEDIA_IMAGES',
  'android.permission.READ_MEDIA_VIDEO',
];

const withMediaPermissionsGuard = (config) => {
  const blocked = (config.android && config.android.blockedPermissions) || [];
  const missing = BANNED.filter((p) => !blocked.includes(p));
  if (missing.length) {
    throw new Error(
      `[withMediaPermissionsGuard] expo.android.blockedPermissions is missing: ${missing.join(', ')}. ` +
        'Shipping these gets the app rejected under the Play Photo and Video Permissions policy. ' +
        'Add them to android.blockedPermissions in app.json.'
    );
  }

  return withAndroidManifest(config, (cfg) => {
    const manifest = cfg.modResults.manifest;
    manifest.$ = manifest.$ || {};
    if (!manifest.$['xmlns:tools']) {
      manifest.$['xmlns:tools'] = 'http://schemas.android.com/tools';
    }

    let perms = manifest['uses-permission'] || [];
    // Drop any plain (non-remove) declarations of banned permissions.
    perms = perms.filter((p) => {
      const name = p && p.$ && p.$['android:name'];
      if (!BANNED.includes(name)) return true;
      return p.$['tools:node'] === 'remove';
    });
    // Ensure a tools:node="remove" entry exists for each banned permission.
    for (const name of BANNED) {
      const has = perms.some(
        (p) => p && p.$ && p.$['android:name'] === name && p.$['tools:node'] === 'remove'
      );
      if (!has) perms.push({ $: { 'android:name': name, 'tools:node': 'remove' } });
    }
    manifest['uses-permission'] = perms;

    // Final assertion — if a banned permission somehow survives without remove, abort.
    const bad = perms.filter(
      (p) => p && p.$ && BANNED.includes(p.$['android:name']) && p.$['tools:node'] !== 'remove'
    );
    if (bad.length) {
      throw new Error(
        `[withMediaPermissionsGuard] banned media permissions still present in manifest: ${bad
          .map((p) => p.$['android:name'])
          .join(', ')}`
      );
    }
    return cfg;
  });
};

module.exports = createRunOncePlugin(withMediaPermissionsGuard, 'withMediaPermissionsGuard', '1.0.0');
