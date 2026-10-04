import React from 'react';
import { NotoFarmerDarkSkinTone } from '@expocraft-icons/noto';
import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';
import { useGraphqlQuery } from '@cloudhub-ux/graphql';
import useAuthentication from '@sqwiro/appcore/auth/context/useAuthentication';

import { AppTile, Box } from '@expocraft/baseui';

const Farmbridge_farminspectorMenuButton = (props) => {
  const { appsDrawerNavigator } = useAppNavigationContext();
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
    <Box>
      <AppTile
        id="smartfarminspector"
        title="Farm Inspector"
        icon={<NotoFarmerDarkSkinTone />}
        onPress={() => {
          appsDrawerNavigator.navigate('smartfarminspector');
        }}
        style={{
          width: 150,
          height: 150,
        }}
        {...props} />
    </Box>
  );
};

export default Farmbridge_farminspectorMenuButton;
