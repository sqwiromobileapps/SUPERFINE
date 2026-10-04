import React from 'react';
import { NotoFarmerDarkSkinTone } from '@expocraft-icons/noto';
import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';
import { useGraphqlQuery } from '@cloudhub-ux/graphql';
import useAuthentication from '@sqwiro/appcore/auth/context/useAuthentication';

import { AppTile } from '@expocraft/baseui';

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

  // A direct child of the home's app-card grid (no wrapper, so the grid sizes the cell).
  return (
    <AppTile
      id="smartfarminspector"
      title="Farm Inspector"
      icon={<NotoFarmerDarkSkinTone />}
      onPress={() => {
        appsDrawerNavigator.navigate('smartfarminspector');
      }}
      {...props} />
  );
};

export default Farmbridge_farminspectorMenuButton;
