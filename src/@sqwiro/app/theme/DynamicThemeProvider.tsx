import React from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeContext from '@expocraft/core/lib/theme/ThemeContext';
import useMerchantContext from '@sqwiro/appcore/context/useMerchantContext';

import resolveColorTheme, { DEFAULT_THEME } from './resolveTheme';
import ThemeModeContext, { ThemeModePref } from './ThemeModeContext';

const STORAGE_KEY = 'sqwiro.theme.colorTheme';
const MODE_KEY = 'sqwiro.theme.mode';

/**
 * Re-provides the @expocraft/core ThemeContext with colors resolved from the
 * merchant's chosen palette (`ColorTheme`) + the current OS color scheme.
 *
 * Mounted BELOW MerchantProvider (see AppHome.tsx), so the merchant record is
 * already loaded. The parent (root) ThemeProvider still supplies fonts/sizes/
 * Images/Sounds — we spread those through and only override `colors`.
 *
 * `useAppTheme()` reads the nearest ThemeContext, so every existing screen is
 * reskinned with zero per-screen changes. The merchant's choice is set on
 * desktop (System app) — mobile only consumes it.
 */
const DynamicThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const parent = React.useContext(ThemeContext) as any;

  const scheme = useColorScheme();
  const osMode = scheme === 'dark' ? 'dark' : 'light';

  // User preference: 'system' follows the OS; 'light'/'dark' override it (and
  // work immediately, independent of the native userInterfaceStyle flag).
  const [modePref, setModePref] = React.useState<ThemeModePref>('system');

  React.useEffect(() => {
    let active = true;
    AsyncStorage.getItem(MODE_KEY)
      .then((value) => {
        if (active && (value === 'light' || value === 'dark' || value === 'system')) {
          setModePref(value);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const setMode = React.useCallback((next: ThemeModePref) => {
    setModePref(next);
    AsyncStorage.setItem(MODE_KEY, next).catch(() => {});
  }, []);

  const mode: 'light' | 'dark' = modePref === 'system' ? osMode : modePref;

  const { merchant } = useMerchantContext() as any;

  // Mirror desktop's App.tsx `MerchantTheme` resolution exactly.
  const merchantColorTheme: string | undefined = React.useMemo(() => {
    const SystemApp =
      merchant?.InstalledApplications?.['magneta_application/system'] ||
      merchant?.BusinessApplications?.['magneta_application/system'] ||
      {};
    return SystemApp?.ApplicationSettings?.ColorTheme || undefined;
  }, [merchant]);

  // Cache for instant first paint before the merchant record resolves.
  const [cachedTheme, setCachedTheme] = React.useState<string | undefined>(
    undefined,
  );

  React.useEffect(() => {
    let active = true;
    AsyncStorage.getItem(STORAGE_KEY)
      .then((value) => {
        if (active && value) setCachedTheme(value);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  React.useEffect(() => {
    if (merchantColorTheme && merchantColorTheme !== cachedTheme) {
      setCachedTheme(merchantColorTheme);
      AsyncStorage.setItem(STORAGE_KEY, merchantColorTheme).catch(() => {});
    }
  }, [merchantColorTheme, cachedTheme]);

  const activeTheme = merchantColorTheme || cachedTheme || DEFAULT_THEME;

  const colors = React.useMemo(
    () => resolveColorTheme(activeTheme, mode),
    [activeTheme, mode],
  );

  const value = React.useMemo(
    () => ({ ...parent, colors }),
    [parent, colors],
  );

  const modeValue = React.useMemo(
    () => ({ mode: modePref, effectiveMode: mode, setMode }),
    [modePref, mode, setMode],
  );

  return (
    <ThemeContext.Provider value={value}>
      <ThemeModeContext.Provider value={modeValue}>
        {children}
      </ThemeModeContext.Provider>
    </ThemeContext.Provider>
  );
};

export default DynamicThemeProvider;
