import React from 'react';
import ThemeProvider from '@expocraft/core/lib/theme/ThemeProvider';
import { colors, sizes, fonts, Images } from './@sqwiro/app/theme';
import UpdatesManager from '@sqwiro/appcore/backgroundtasks/UpdatesManager';
import AppHome from '@sqwiro/app/AppHome';
import getConfig from '@sqwiro/app/config/getConfig';
import PreloadAssets from '@sqwiro/app/PreloadAssets';

require('./DismissWarnings');

const App = () => {
  const Fonts = {
    'clanpro-bold': require('@sqwiro/app/assets/fonts/clanpro/clanpro-bold.ttf'),
    'clanpro-black': require('@sqwiro/app/assets/fonts/clanpro/clanpro-black.ttf'),
    'clanpro-book': require('@sqwiro/app/assets/fonts/clanpro/clanpro-book.ttf'),
    'clanpro-thin': require('@sqwiro/app/assets/fonts/clanpro/clanpro-thin.ttf'),
  };

  return (
    <PreloadAssets Fonts={Fonts} Images={Images} Sounds={{}}>
      <ThemeProvider
        colors={colors}
        sizes={sizes}
        fonts={fonts}
        Images={Images}
        CONFIG={getConfig()}
      >
        <AppHome />
        <UpdatesManager />
      </ThemeProvider>
    </PreloadAssets>
  );
};

export default App;
