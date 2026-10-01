// Forces a single AppTheme with parent Theme.AppCompat.DayNight.NoActionBar in
// android/app/src/main/res/values/styles.xml. expo-splash-screen (and the sdk-56
// edge-to-edge default) can emit a different AppTheme parent or a duplicate AppTheme,
// which causes :app:mergeResources clashes / wrong theming. This plugin runs last
// (wired after expo-splash-screen in app.json), de-duplicates AppTheme, unions its
// <item>s, and pins the parent. Theme.App.SplashScreen and all other styles are left
// untouched (it references @style/AppTheme via postSplashScreenTheme).
const { withAndroidStyles, createRunOncePlugin } = require('expo/config-plugins');

const PARENT = 'Theme.AppCompat.DayNight.NoActionBar';
const REQUIRED_ITEMS = [
  { name: 'android:editTextBackground', value: '@drawable/rn_edit_text_material' },
  { name: 'colorPrimary', value: '@color/colorPrimary' },
];

const isAppTheme = (s) => s && s.$ && s.$.name === 'AppTheme';

const withAppThemeDayNight = (config) =>
  withAndroidStyles(config, (cfg) => {
    const styles = cfg.modResults.resources.style || [];
    const appThemes = styles.filter(isAppTheme);

    // Union all <item>s across every AppTheme definition (last value per name wins).
    const itemMap = new Map();
    for (const st of appThemes) {
      for (const it of st.item || []) {
        if (it && it.$ && it.$.name) itemMap.set(it.$.name, it);
      }
    }
    // Guarantee the two canonical items are present.
    for (const ri of REQUIRED_ITEMS) {
      if (!itemMap.has(ri.name)) itemMap.set(ri.name, { $: { name: ri.name }, _: ri.value });
    }

    const rebuilt = {
      $: { name: 'AppTheme', parent: PARENT },
      item: Array.from(itemMap.values()),
    };

    cfg.modResults.resources.style = [...styles.filter((s) => !isAppTheme(s)), rebuilt];
    return cfg;
  });

module.exports = createRunOncePlugin(withAppThemeDayNight, 'withAppThemeDayNight', '1.0.0');
