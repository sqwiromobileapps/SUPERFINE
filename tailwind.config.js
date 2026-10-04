// Tailwind 3.4 for NativeWind v4 (M1, @expocraft/baseui). Never `important`, never `!` classes (G-2).
// content must be ABSOLUTE: babel and Metro resolve the apps and appcore from outside this folder.
const fs = require('fs');
const path = require('path');
const baseui = require('@expocraft/baseui/config/tailwind'); // includes nativewind/preset
const appMapping = require('./app-mapping.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [baseui],
  darkMode: 'class',
  content: [
    ...baseui.baseuiContent(),
    path.join(__dirname, 'src/@sqwiro/app/**/*.{ts,tsx}'),
    path.join(fs.realpathSync(path.join(__dirname, 'src/@sqwiro/appcore')), '**/*.{ts,tsx}'),
    ...Object.values(appMapping).map((p) => path.join(p, '**/*.{ts,tsx}')),
  ],
};
