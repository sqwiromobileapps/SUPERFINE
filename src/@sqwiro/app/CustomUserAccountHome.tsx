import React from 'react';
import { Block, Header, IconButton, Text } from '@expocraft/core';
import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';
import { Images, colors, moderateScale } from '@sqwiro/app/theme';
import {
  MdiAccountGroupOutline,
  MdiCashCheck,
  MdiCheckCircle,
  MdiMenu,
  MdiSteering,
} from '@expocraft-icons/mdi';
import useAuthentication from '@sqwiro/appcore/auth/context/useAuthentication';
import { MenuButton } from '@expocraft/core/lib/widgets';
import Farmbridge_farminspectorMenuButton from '@sqwiro/app/userbuttons/Farmbridge_farminspectorMenuButton';
import { ChubPesaPurse } from '@expocraft-icons/chub';

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
    <Block>
      <Header
        title="User Account Home"
        leftComponent={
          <IconButton
            onPress={() => {
              appsDrawerNavigator.openDrawer();
            }}
            size={moderateScale(32)}
          >
            <MdiMenu />
          </IconButton>
        }
        hasHeight
      />

      <Block>
        <Block flex={false} padding>
          <Text bold>{`Welcome, ${name || 'Guest'}`}</Text>
        </Block>

        <Block scrollView>
          <Block flex={false} padding row wrap center space="around">
            {[
              <MenuButton
                id="farmerapp"
                title="Farmer App"
                iconSize={45}
                imageIcon={Images.logo}
                color={colors.blueGrey[500]}
                lightColor={colors.blueGrey[100]}
                buttonStyle={{
                  width: 130,
                  height: 130,
                }}
                onPress={() => {
                  appsDrawerNavigator.navigate('smartfarmer');
                }}
              />,

              <MenuButton
                id="staffapp"
                title="Staff App"
                iconSize={45}
                IconComponent={<MdiAccountGroupOutline />}
                color={colors.blueGrey[500]}
                lightColor={colors.blueGrey[100]}
                buttonStyle={{
                  width: 130,
                  height: 130,
                }}
                onPress={() => {
                  appsDrawerNavigator.navigate('smartstaff');
                }}
              />,

              <Farmbridge_farminspectorMenuButton
                id="smartfarminspector"
                title="Farm Inspector"
                onPress={() => {
                  appsDrawerNavigator.navigate('smartfarminspector');
                }}
              />,

              <MenuButton
                id="smartvendoraccount"
                title="Vendor Account"
                iconSize={45}
                IconComponent={<MdiCashCheck color="brown" />}
                onPress={() => {
                  appsDrawerNavigator.navigate('smartvendoraccount');
                }}
                color={colors.brown[500]}
                lightColor={colors.brown[100]}
                buttonColor={colors.brown[100]}
                buttonStyle={{
                  width: 130,
                  height: 130,
                }}
              />,

              <MenuButton
                id="smartdriver"
                title="Smart Driver"
                iconSize={45}
                IconComponent={<MdiSteering />}
                onPress={() => {
                  appsDrawerNavigator.navigate('smartdriver');
                }}
                color={colors.indigo[500]}
                lightColor={colors.indigo[100]}
                buttonColor={colors.indigo[100]}
                buttonStyle={{
                  width: 130,
                  height: 130,
                }}
              />,

              <MenuButton
                id="smartpesapurse"
                title="PesaPurse"
                iconSize={45}
                IconComponent={<ChubPesaPurse color={colors.dark} />}
                onPress={() => {
                  appsDrawerNavigator.navigate('smartpesapurse');
                }}
                color={colors.grey[700]}
                lightColor={colors.grey[100]}
                buttonColor={colors.yellow[200]}
                buttonStyle={{
                  width: 130,
                  height: 130,
                }}
              />,

              <MenuButton
                id="enterprisewallet"
                title="Enterprise Wallet"
                IconComponent={<ChubPesaPurse color={colors.dark} />}
                color={colors.blueGrey[500]}
                lightColor={colors.blueGrey[100]}
                onPress={() => {
                  appsDrawerNavigator.navigate('enterprisewallet');
                }}
                buttonStyle={{
                  width: 130,
                  height: 130,
                }}
                iconSize={45}
              />,

              <>
                {isMerchantAdmin && (
                  <MenuButton
                    id="smartapprover"
                    title="Smart Approver"
                    iconSize={45}
                    IconComponent={<MdiCheckCircle />}
                    onPress={() => {
                      appsDrawerNavigator.navigate('smartapprover');
                    }}
                    color={colors.green[500]}
                    lightColor={colors.green[100]}
                    buttonColor={colors.green[100]}
                    buttonStyle={{
                      width: 130,
                      height: 130,
                    }}
                  />
                )}
              </>,
            ].map((app) => app)}
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default CustomUserAccountHome;
