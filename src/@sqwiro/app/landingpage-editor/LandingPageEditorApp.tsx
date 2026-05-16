import React from 'react';
import { Block, Header } from '@expocraft/core';
import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';
import DefaultApp from '@sqwiro/app/DefaultApp';

const LandingPageEditorApp = ({ navigation }) => {
  const { appsDrawerNavigator } = useAppNavigationContext();

  return (
    <Block>
      <Header
        hasHeight
        onBack={() => {
          appsDrawerNavigator.goBack();
        }}
      />

      <Block>
        <DefaultApp />
      </Block>
    </Block>
  );
};

export default LandingPageEditorApp;
