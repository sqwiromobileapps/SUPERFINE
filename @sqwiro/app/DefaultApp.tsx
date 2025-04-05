import React from 'react';

import useMerchantAppNavigation from '@sqwiro/appcore/context/useMerchantAppNavigation';
import PhoneScreen from '@sqwiro/appcore/auth/PhoneScreen';

function DefaultApp({ navigation }) {
  const { dispatch } = useMerchantAppNavigation();

  React.useEffect(() => {
    dispatch((state) => ({
      appNavigationContext: {
        ...state.appNavigationContext,
        authNavigator: navigation,
      },
    }));
  }, []);

  return <PhoneScreen navigation={navigation} />;
}

export default DefaultApp;
