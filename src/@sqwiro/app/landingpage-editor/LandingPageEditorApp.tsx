import React from 'react';
import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';
import DefaultApp from '@sqwiro/app/DefaultApp';
import { Screen, ScreenHeader, Stack } from '@expocraft/baseui';

const LandingPageEditorApp = ({ navigation }) => {
  const { appsDrawerNavigator } = useAppNavigationContext();

  return (
    <Screen
      edges={['top']}
      header={<ScreenHeader
        onBack={() => {
          appsDrawerNavigator.goBack();
        }} />}>
      <Stack grow>
        <DefaultApp />
      </Stack>
    </Screen>
  );
};

export default LandingPageEditorApp;
