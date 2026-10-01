// Pins androidx.media3 to 1.9.0 across all modules so both video players run on one version (M0.3, D-113).
// expo-video 56.1.2 is built against media3 1.9.0 (its LoadControl implements getAllocator(PlayerId); under a
// 1.8.0 pin it throws AbstractMethodError). react-native-video >= 6.19.3 wraps DefaultLoadControl instead of
// subclassing it and runs on media3 1.8-1.10 (6.19.2 crashed on 1.9.0 with NoSuchMethodError
// DefaultLoadControl.<init>). This config plugin re-applies the pin on every `expo prebuild`, and rewrites an
// older pinned version, so it can never be silently reverted.
const { withProjectBuildGradle, createRunOncePlugin } = require('expo/config-plugins');

const MARKER = "details.requested.group == 'androidx.media3'";
const MEDIA3_VERSION = '1.9.0';

// Indented to sit one level inside `allprojects { … }`; no leading/trailing newline.
const MEDIA3_BLOCK = [
  '  // Pin androidx.media3 to a single version across all modules: expo-video 56.1.2 is built',
  '  // for 1.9.0 (AbstractMethodError getAllocator under 1.8.0); react-native-video >= 6.19.3 runs on it.',
  '  configurations.all {',
  '    resolutionStrategy {',
  '      eachDependency { details ->',
  "        if (details.requested.group == 'androidx.media3') {",
  `          details.useVersion '${MEDIA3_VERSION}'`,
  '        }',
  '      }',
  '    }',
  '  }',
].join('\n');

// Given the index of an opening brace, return the index of its matching close brace.
function matchBrace(s, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < s.length; i++) {
    if (s[i] === '{') depth++;
    else if (s[i] === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

const withMedia3Pin = (config) =>
  withProjectBuildGradle(config, (cfg) => {
    if (cfg.modResults.language !== 'groovy') {
      console.warn('[withMedia3Pin] build.gradle is not groovy; skipping');
      return cfg;
    }
    const contents = cfg.modResults.contents;
    if (contents.includes(MARKER)) {
      // idempotent; an older pin (1.8.0) is moved to MEDIA3_VERSION
      cfg.modResults.contents = contents.replace(
        /(details\.requested\.group == 'androidx\.media3'\)\s*\{\s*details\.useVersion ')[^']*(')/,
        `$1${MEDIA3_VERSION}$2`
      );
      return cfg;
    }

    const apMatch = contents.search(/allprojects\s*\{/);
    if (apMatch === -1) {
      console.warn('[withMedia3Pin] no allprojects block found; skipping');
      return cfg;
    }
    const apOpen = contents.indexOf('{', apMatch);
    const apClose = matchBrace(contents, apOpen);
    if (apClose === -1) {
      console.warn('[withMedia3Pin] unbalanced allprojects braces; skipping');
      return cfg;
    }
    // Find the first `repositories { ... }` inside allprojects.
    const body = contents.slice(apOpen + 1, apClose);
    const repoRel = body.search(/repositories\s*\{/);
    if (repoRel === -1) {
      console.warn('[withMedia3Pin] no repositories block inside allprojects; skipping');
      return cfg;
    }
    const repoOpen = apOpen + 1 + body.indexOf('{', repoRel);
    const repoClose = matchBrace(contents, repoOpen);
    if (repoClose === -1 || repoClose > apClose) {
      console.warn('[withMedia3Pin] unbalanced repositories braces; skipping');
      return cfg;
    }
    const insertAt = repoClose + 1;
    cfg.modResults.contents =
      contents.slice(0, insertAt) + '\n' + MEDIA3_BLOCK + contents.slice(insertAt);
    return cfg;
  });

module.exports = createRunOncePlugin(withMedia3Pin, 'withMedia3Pin', '1.1.0');
