import React from 'react';
import { Block } from '@expocraft/core';
import { MenuButton } from '@expocraft/core/lib/widgets';
import { NotoFarmerDarkSkinTone } from '@expocraft-icons/noto';
import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';
import { colors } from '@sqwiro/app/theme';
import { useGraphqlQuery } from '@cloudhub-ux/graphql';
import useAuthentication from '@sqwiro/appcore/auth/context/useAuthentication';

const Farmbridge_farminspectorMenuButton = (props) => {
  const { userAppsDrawerNavigator } = useAppNavigationContext();
  const { currentUser } = useAuthentication();

  const {
    data: farminspector,
    isLoading,
    error,
  } = useGraphqlQuery(
    ({ Farmbridge_farminspector }) => {
      return Farmbridge_farminspector()
        .findOne({ id: currentUser.id })
        .toJson();
    },
    [currentUser.id]
  );

  console.log('farminspector', currentUser.id, farminspector);

  if (!farminspector) {
    return null;
  }

  return (
    <Block flex={false}>
      <MenuButton
        id="smartfarminspector"
        title="Farm Inspector"
        iconSize={75}
        IconComponent={<NotoFarmerDarkSkinTone />}
        onPress={() => {
          userAppsDrawerNavigator.navigate('smartfarminspector');
        }}
        color={colors.blueGrey[500]}
        lightColor={colors.blueGrey[100]}
        buttonColor={colors.blueGrey[100]}
        buttonStyle={{
          width: 150,
          height: 150,
        }}
        {...props}
      />
    </Block>
  );
};

export default Farmbridge_farminspectorMenuButton;
