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
import useAuthentication from '@sqwiro/appcore/auth/context/useAuthentication';
import Farmbridge_farminspectorMenuButton from '@sqwiro/app/userbuttons/Farmbridge_farminspectorMenuButton';
import { ChubPesaPurse } from '@expocraft-icons/chub';

import { AppTile, Box, Row, ScrollArea, Stack, Text } from '@expocraft/baseui';

const CustomUserAccountHome = ({ navigation }) => {
  const { appsDrawerNavigator } = useAppNavigationContext();
  const { dispatch } = useAppNavigationContext();
  const { currentUser, isMerchantAdmin } = useAuthentication();

  const name = `${currentUser.Name}`
    .split(' ')
    .filter((n) => `${n}`.length > 1)[0];

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
      <Box className="p-3">
        <Text variant="small" weight="bold">{`Welcome, ${name || 'Guest'}`}</Text>
      </Box>

      <ScrollArea className="flex-1">
        <Row justify="around" wrap className="p-3">
          {[
            <AppTile
              id="farmerapp"
              title="Farmer App"
              icon={<Image source={Images.logo as any} resizeMode="contain" style={{ width: 24, height: 24 }} />}
              style={{
                width: 130,
                height: 130,
              }}
              onPress={() => {
                appsDrawerNavigator.navigate('smartfarmer');
              }} />,

            <AppTile
              id="staffapp"
              title="Staff App"
              icon={<MdiAccountGroupOutline />}
              style={{
                width: 130,
                height: 130,
              }}
              onPress={() => {
                appsDrawerNavigator.navigate('smartstaff');
              }} />,

            <Farmbridge_farminspectorMenuButton
              id="smartfarminspector"
              title="Farm Inspector"
              onPress={() => {
                appsDrawerNavigator.navigate('smartfarminspector');
              }}
            />,

            <AppTile
              id="smartvendoraccount"
              title="Vendor Account"
              icon={<MdiCashCheck color="brown" />}
              onPress={() => {
                appsDrawerNavigator.navigate('smartvendoraccount');
              }}
              style={{
                width: 130,
                height: 130,
              }} />,

            <AppTile
              id="smartdriver"
              title="Smart Driver"
              icon={<MdiSteering />}
              onPress={() => {
                appsDrawerNavigator.navigate('smartdriver');
              }}
              style={{
                width: 130,
                height: 130,
              }} />,

            <AppTile
              id="smartpesapurse"
              title="PesaPurse"
              icon={<ChubPesaPurse color={colors.dark} />}
              onPress={() => {
                appsDrawerNavigator.navigate('smartpesapurse');
              }}
              style={{
                width: 130,
                height: 130,
              }} />,

            <AppTile
              id="enterprisewallet"
              title="Enterprise Wallet"
              icon={<ChubPesaPurse color={colors.dark} />}
              onPress={() => {
                appsDrawerNavigator.navigate('enterprisewallet');
              }}
              style={{
                width: 130,
                height: 130,
              }} />,

            <>
              {isMerchantAdmin && (
                <AppTile
                  id="smartapprover"
                  title="Smart Approver"
                  icon={<MdiCheckCircle />}
                  onPress={() => {
                    appsDrawerNavigator.navigate('smartapprover');
                  }}
                  style={{
                    width: 130,
                    height: 130,
                  }} />
              )}
            </>,
          ].map((app) => app)}
        </Row>
      </ScrollArea>
    </Stack>
  );
};

export default CustomUserAccountHome;
