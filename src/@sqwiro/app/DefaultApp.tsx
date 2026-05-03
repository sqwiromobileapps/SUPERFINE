import React from 'react';

import PhoneScreen from '@sqwiro/appcore/auth/PhoneScreen';
import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';

function DefaultApp({ navigation }) {
  const { dispatch, authNavigator } = useAppNavigationContext();

  React.useEffect(() => {
    if (!authNavigator && navigation) {
      dispatch((state) => ({
        appNavigationContext: {
          ...state.appNavigationContext,
          authNavigator: navigation,
        },
      }));
    }
  }, [navigation]);

  return <PhoneScreen navigation={navigation} />;
}

export default DefaultApp;
