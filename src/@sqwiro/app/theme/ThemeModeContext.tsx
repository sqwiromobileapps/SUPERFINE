import React from 'react';

export type ThemeModePref = 'light' | 'dark' | 'system';

export type ThemeModeValue = {
  /** The user's saved preference. */
  mode: ThemeModePref;
  /** The mode actually applied right now ('system' resolved against the OS). */
  effectiveMode: 'light' | 'dark';
  /** Persist a new preference (light/dark works immediately; system follows OS). */
  setMode: (mode: ThemeModePref) => void;
};

const ThemeModeContext = React.createContext<ThemeModeValue>({
  mode: 'system',
  effectiveMode: 'light',
  setMode: () => {},
});

/** Read/set the light/dark/system preference from anywhere (e.g. Settings). */
export const useThemeMode = () => React.useContext(ThemeModeContext);

export default ThemeModeContext;
