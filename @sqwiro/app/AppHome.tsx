import React from 'react';
import PreloadApp from '@sqwiro/appcore/context/PreloadApp';
// import RootNavigator from '@sqwiro/appcore/navigation/RootNavigator';
import RootDrawerNavigator from '@sqwiro/appcore/navigation/RootDrawerNavigator';
import getConfig from './config/getConfig';

const AppHome = () => {
  return (
    <PreloadApp
      MerchantCode={getConfig().MerchantCode}
      GooglePlayId={`${getConfig().GooglePlayId}`}
    >
      <RootDrawerNavigator />
    </PreloadApp>
  );
};

export default AppHome;
