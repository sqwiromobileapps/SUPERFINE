// Pins androidx.media3 to 1.8.0 across all modules so video playback works.
// react-native-video@6.19.2 compiles against media3 1.8.0 (subclasses DefaultLoadControl
// with a constructor removed in 1.9.0); expo-video pulls 1.9.0, so the unified runtime
// classpath (1.9.0) crashes with NoSuchMethodError on any playback. Forcing 1.8.0 makes
// both compile and run against the same API. This config plugin re-applies the pin on
// every `expo prebuild`, so it can never be silently reverted.
const { withProjectBuildGradle, createRunOncePlugin } = require('expo/config-plugins');

const MARKER = "details.requested.group == 'androidx.media3'";

// Indented to sit one level inside `allprojects { … }`; no leading/trailing newline.
const MEDIA3_BLOCK = [
  '  // Pin androidx.media3 to a single version across all modules. (react-native-video',
  '  // 6.19.2 needs 1.8.0; expo-video pulls 1.9.0 -> DefaultLoadControl NoSuchMethodError.)',
  '  configurations.all {',
  '    resolutionStrategy {',
  '      eachDependency { details ->',
  "        if (details.requested.group == 'androidx.media3') {",
  "          details.useVersion '1.8.0'",
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
    if (contents.includes(MARKER)) return cfg; // idempotent

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

module.exports = createRunOncePlugin(withMedia3Pin, 'withMedia3Pin', '1.0.0');
