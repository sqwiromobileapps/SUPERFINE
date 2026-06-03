import React from 'react';
import CustomUserAccountHome from './CustomUserAccountHome';
import useAuthentication from '@sqwiro/appcore/auth/context/useAuthentication';
import HomeLayout from '@sqwiro/appcore/navigation/HomeLayout';
import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';
import AdminAppsHome from '@sqwiro/appcore/navigation/adminapps/AdminAppsHome';

const UserAppsHome = ({ navigation }) => {
  const { isAdmin } = useAuthentication();
  const { appsDrawerNavigator, adminMode } = useAppNavigationContext();

  return (
    <HomeLayout>
      {adminMode ? (
        <AdminAppsHome navigation={navigation} />
      ) : (
        <CustomUserAccountHome navigation={navigation} />
      )}
    </HomeLayout>
  );
};

export default UserAppsHome;
