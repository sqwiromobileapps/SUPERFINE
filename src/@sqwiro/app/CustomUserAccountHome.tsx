import React from 'react';
import { Image } from 'react-native';
import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';
import { Images, colors } from '@sqwiro/appcore/theme';
import {
  MdiAccountGroupOutline,
  MdiCashCheck,
  MdiCheckCircle,
  MdiSteering,
} from '@expocraft-icons/mdi';
import useMerchantContext from '@sqwiro/appcore/context/useMerchantContext';
import useAuthentication from '@sqwiro/appcore/auth/context/useAuthentication';
import appCatalogue from '@sqwiro/appcore/utils/appDescriptions';
import { appDescriptionOf } from '@sqwiro/appcore/navigation/adminapps/appsHomeFilter';
import Farmbridge_farminspectorMenuButton from '@sqwiro/app/userbuttons/Farmbridge_farminspectorMenuButton';
import { ChubPesaPurse } from '@expocraft-icons/chub';

import { AppTile, AppTileGrid, Box, ScrollArea, Stack, Text } from '@expocraft/baseui';

const CustomUserAccountHome = ({ navigation }) => {
  const { appsDrawerNavigator } = useAppNavigationContext();
  const { dispatch } = useAppNavigationContext();
  const { merchant } = useMerchantContext();
  const { currentUser, isMerchantAdmin } = useAuthentication();

  const name = `${currentUser.Name}`
    .split(' ')
    .filter((n) => `${n}`.length > 1)[0];

  // App-card descriptions (D-184), as the appsroot user home and AdminAppsHome: the merchant's install record, else
  // the generated catalogue (by app id); a description that only repeats the id or a name counts as none.
  const describe = (appId: string, title: string) => {
    const record: any = (merchant.InstalledApplications || {})[`magneta_application/${appId}`];
    return (
      appDescriptionOf(record, [appId, record?.AppName, title, appCatalogue[appId]?.name]) ??
      appCatalogue[appId]?.description
    );
  };

  React.useEffect(() => {
    if (navigation) {
      dispatch((state) => ({
        appNavigationContext: {
          ...state.appNavigationContext,
          appsDrawerNavigator: navigation,
        },
      }));
    }
  }, [navigation]);

  return (
    <Stack grow>
      <Box className="px-4 pt-3">
        <Text variant="small" weight="bold">{`Welcome, ${name || 'Guest'}`}</Text>
      </Box>

      <ScrollArea className="flex-1">
        {/* App cards (D-184): one a row on phones, two from 600 pt; a tile that renders nothing leaves no hole. */}
        <Box className="px-4 pt-3 pb-6">
          <AppTileGrid variant="appcards">
            <AppTile
              id="farmerapp"
              title="Farmer App"
              description={describe('smartfarmer', 'Farmer App')}
              icon={<Image source={Images.logo as any} resizeMode="contain" style={{ width: 24, height: 24 }} />}
              onPress={() => {
                appsDrawerNavigator.navigate('smartfarmer');
              }} />

            <AppTile
              id="staffapp"
              title="Staff App"
              description={describe('smartstaff', 'Staff App')}
              icon={<MdiAccountGroupOutline />}
              onPress={() => {
                appsDrawerNavigator.navigate('smartstaff');
              }} />

            <Farmbridge_farminspectorMenuButton
              id="smartfarminspector"
              title="Farm Inspector"
              description={describe('smartfarminspector', 'Farm Inspector')}
              onPress={() => {
                appsDrawerNavigator.navigate('smartfarminspector');
              }}
            />

            <AppTile
              id="smartvendoraccount"
              title="Vendor Account"
              description={describe('smartvendoraccount', 'Vendor Account')}
              icon={<MdiCashCheck color="brown" />}
              onPress={() => {
                appsDrawerNavigator.navigate('smartvendoraccount');
              }} />

            <AppTile
              id="smartdriver"
              title="Smart Driver"
              description={describe('smartdriver', 'Smart Driver')}
              icon={<MdiSteering />}
              onPress={() => {
                appsDrawerNavigator.navigate('smartdriver');
              }} />

            <AppTile
              id="smartpesapurse"
              title="PesaPurse"
              description={describe('smartpesapurse', 'PesaPurse')}
              icon={<ChubPesaPurse color={colors.dark} />}
              onPress={() => {
                appsDrawerNavigator.navigate('smartpesapurse');
              }} />

            <AppTile
              id="enterprisewallet"
              title="Enterprise Wallet"
              description={describe('enterprisewallet', 'Enterprise Wallet')}
              icon={<ChubPesaPurse color={colors.dark} />}
              onPress={() => {
                appsDrawerNavigator.navigate('enterprisewallet');
              }} />

            {isMerchantAdmin && (
              <AppTile
                id="smartapprover"
                title="Smart Approver"
                description={describe('smartapprover', 'Smart Approver')}
                icon={<MdiCheckCircle />}
                onPress={() => {
                  appsDrawerNavigator.navigate('smartapprover');
                }} />
            )}
          </AppTileGrid>
        </Box>
      </ScrollArea>
    </Stack>
  );
};

export default CustomUserAccountHome;
