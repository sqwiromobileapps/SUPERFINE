import React from 'react';
import { SafeLazy, Block } from '@expocraft/core';
import AppNotFound from '@sqwiro/appcore/utils/AppNotFound';
import { ScreenLoading } from '@sqwiro/appcore/utils';
import { MenuButton } from '@expocraft/core/lib/widgets';
import { colors } from '@sqwiro/appcore/theme';

import { Cs50MenuButton } from '@sqwiro/customapps/cs50/Cs50MenuButton';
import { Cs50App } from '@sqwiro/customapps/cs50/Cs50App';

import { MpesaproMenuButton } from '@sqwiro/apiapps/mpesapro/MpesaproMenuButton';
import { MpesaproApp } from '@sqwiro/apiapps/mpesapro/MpesaproApp';

import { WebsiteMenuButton } from '@sqwiro/cmsapps/website/WebsiteMenuButton';
import { WebsiteApp } from '@sqwiro/cmsapps/website/WebsiteApp';

import { AvoproMenuButton } from '@sqwiro/agribusinessapps/avopro/AvoproMenuButton';
import { AvoproApp } from '@sqwiro/agribusinessapps/avopro/AvoproApp';

import { CstoreMenuButton } from '@sqwiro/agribusinessapps/cstore/CstoreMenuButton';
import { CstoreApp } from '@sqwiro/agribusinessapps/cstore/CstoreApp';

import { FarmbridgeMenuButton } from '@sqwiro/agribusinessapps/farmbridge/FarmbridgeMenuButton';
import { FarmbridgeApp } from '@sqwiro/agribusinessapps/farmbridge/FarmbridgeApp';

import { MacsproMenuButton } from '@sqwiro/agribusinessapps/macspro/MacsproMenuButton';
import { MacsproApp } from '@sqwiro/agribusinessapps/macspro/MacsproApp';

import { SeedlinkMenuButton } from '@sqwiro/agribusinessapps/seedlink/SeedlinkMenuButton';
import { SeedlinkApp } from '@sqwiro/agribusinessapps/seedlink/SeedlinkApp';

import { SmartfarmagentMenuButton } from '@sqwiro/agribusinessapps/smartfarmagent/SmartfarmagentMenuButton';
import { SmartfarmagentApp } from '@sqwiro/agribusinessapps/smartfarmagent/SmartfarmagentApp';

import { SmartfarmerMenuButton } from '@sqwiro/agribusinessapps/smartfarmer/SmartfarmerMenuButton';
import { SmartfarmerApp } from '@sqwiro/agribusinessapps/smartfarmer/SmartfarmerApp';

import { SmartfarminspectorMenuButton } from '@sqwiro/agribusinessapps/smartfarminspector/SmartfarminspectorMenuButton';
import { SmartfarminspectorApp } from '@sqwiro/agribusinessapps/smartfarminspector/SmartfarminspectorApp';

import { SaccomisMenuButton } from '@sqwiro/saccoapps/saccomis/SaccomisMenuButton';
import { SaccomisApp } from '@sqwiro/saccoapps/saccomis/SaccomisApp';

import { SmartsaccowalletMenuButton } from '@sqwiro/saccoapps/smartsaccowallet/SmartsaccowalletMenuButton';
import { SmartsaccowalletApp } from '@sqwiro/saccoapps/smartsaccowallet/SmartsaccowalletApp';

import { SmartvumaenterprisewalletMenuButton } from '@sqwiro/saccoapps/smartvumaenterprisewallet/SmartvumaenterprisewalletMenuButton';
import { SmartvumaenterprisewalletApp } from '@sqwiro/saccoapps/smartvumaenterprisewallet/SmartvumaenterprisewalletApp';

import { CartifyMenuButton } from '@sqwiro/ecommerceapps/cartify/CartifyMenuButton';
import { CartifyApp } from '@sqwiro/ecommerceapps/cartify/CartifyApp';

import { SmartshoppingcartMenuButton } from '@sqwiro/ecommerceapps/smartshoppingcart/SmartshoppingcartMenuButton';
import { SmartshoppingcartApp } from '@sqwiro/ecommerceapps/smartshoppingcart/SmartshoppingcartApp';

import { SmartsqwiropayMenuButton } from '@sqwiro/ecommerceapps/smartsqwiropay/SmartsqwiropayMenuButton';
import { SmartsqwiropayApp } from '@sqwiro/ecommerceapps/smartsqwiropay/SmartsqwiropayApp';

import { FleetmanagerMenuButton } from '@sqwiro/transportapps/fleetmanager/FleetmanagerMenuButton';
import { FleetmanagerApp } from '@sqwiro/transportapps/fleetmanager/FleetmanagerApp';

import { SmartdriverMenuButton } from '@sqwiro/transportapps/smartdriver/SmartdriverMenuButton';
import { SmartdriverApp } from '@sqwiro/transportapps/smartdriver/SmartdriverApp';

import { AgencyproMenuButton } from '@sqwiro/fintechapps/agencypro/AgencyproMenuButton';
import { AgencyproApp } from '@sqwiro/fintechapps/agencypro/AgencyproApp';

import { EnterprisewalletMenuButton } from '@sqwiro/fintechapps/enterprisewallet/EnterprisewalletMenuButton';
import { EnterprisewalletApp } from '@sqwiro/fintechapps/enterprisewallet/EnterprisewalletApp';

import { PpcoreMenuButton } from '@sqwiro/fintechapps/ppcore/PpcoreMenuButton';
import { PpcoreApp } from '@sqwiro/fintechapps/ppcore/PpcoreApp';

import { PpwalletMenuButton } from '@sqwiro/fintechapps/ppwallet/PpwalletMenuButton';
import { PpwalletApp } from '@sqwiro/fintechapps/ppwallet/PpwalletApp';

import { SmartpesapurseMenuButton } from '@sqwiro/fintechapps/smartpesapurse/SmartpesapurseMenuButton';
import { SmartpesapurseApp } from '@sqwiro/fintechapps/smartpesapurse/SmartpesapurseApp';

import { FinanceMenuButton } from '@sqwiro/businessapps/finance/FinanceMenuButton';
import { FinanceApp } from '@sqwiro/businessapps/finance/FinanceApp';

import { MakercheckerMenuButton } from '@sqwiro/businessapps/makerchecker/MakercheckerMenuButton';
import { MakercheckerApp } from '@sqwiro/businessapps/makerchecker/MakercheckerApp';

import { MasterdataMenuButton } from '@sqwiro/businessapps/masterdata/MasterdataMenuButton';
import { MasterdataApp } from '@sqwiro/businessapps/masterdata/MasterdataApp';

import { MediamanagerMenuButton } from '@sqwiro/businessapps/mediamanager/MediamanagerMenuButton';
import { MediamanagerApp } from '@sqwiro/businessapps/mediamanager/MediamanagerApp';

import { ProcurementMenuButton } from '@sqwiro/businessapps/procurement/ProcurementMenuButton';
import { ProcurementApp } from '@sqwiro/businessapps/procurement/ProcurementApp';

import { RetailMenuButton } from '@sqwiro/businessapps/retail/RetailMenuButton';
import { RetailApp } from '@sqwiro/businessapps/retail/RetailApp';

import { SalesMenuButton } from '@sqwiro/businessapps/sales/SalesMenuButton';
import { SalesApp } from '@sqwiro/businessapps/sales/SalesApp';

import { SmartapproverMenuButton } from '@sqwiro/businessapps/smartapprover/SmartapproverMenuButton';
import { SmartapproverApp } from '@sqwiro/businessapps/smartapprover/SmartapproverApp';

import { SmartvendoraccountMenuButton } from '@sqwiro/businessapps/smartvendoraccount/SmartvendoraccountMenuButton';
import { SmartvendoraccountApp } from '@sqwiro/businessapps/smartvendoraccount/SmartvendoraccountApp';

import { SystemMenuButton } from '@sqwiro/systemapps/system/SystemMenuButton';
import { SystemApp } from '@sqwiro/systemapps/system/SystemApp';

import { SmartcustomerhelpMenuButton } from '@sqwiro/customercareapps/smartcustomerhelp/SmartcustomerhelpMenuButton';
import { SmartcustomerhelpApp } from '@sqwiro/customercareapps/smartcustomerhelp/SmartcustomerhelpApp';

import { SmartsqwirosupportMenuButton } from '@sqwiro/customercareapps/smartsqwirosupport/SmartsqwirosupportMenuButton';
import { SmartsqwirosupportApp } from '@sqwiro/customercareapps/smartsqwirosupport/SmartsqwirosupportApp';

import { SqwiropayMenuButton } from '@sqwiro/cloudhubapps/sqwiropay/SqwiropayMenuButton';
import { SqwiropayApp } from '@sqwiro/cloudhubapps/sqwiropay/SqwiropayApp';

import { HrMenuButton } from '@sqwiro/hrapps/hr/HrMenuButton';
import { HrApp } from '@sqwiro/hrapps/hr/HrApp';

import { SmartstaffMenuButton } from '@sqwiro/hrapps/smartstaff/SmartstaffMenuButton';
import { SmartstaffApp } from '@sqwiro/hrapps/smartstaff/SmartstaffApp';

function LoadingComponent() {
  return (
    <Block center middle>
      <ScreenLoading label="Loading..." />
    </Block>
  );
}

function LoadingMenuButton() {
  return (
    <MenuButton
      id={'smartapp'}
      title={''}
      iconSize={75}
      IconComponent={null}
      buttonColor={colors.blueGrey[100]}
      color={colors.blueGrey[500]}
      lightColor={colors.blueGrey[100]}
      buttonStyle={{
        width: 150,
        height: 150,
      }}
      onPress={() => {}}
    />
  );
}

export const installedApps = {
  'magneta_application/cs50': {
    id: 'cs50',
    _ref: 'magneta_application/cs50',
    AppId: 'cs50',
    packageName: '@sqwiromobilecustomapps/cs50',
    appRoot: '@sqwiro/customapps/cs50',
    RootComponent: Cs50App,
    MenuButton: Cs50MenuButton,
    groupId: 'customapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/customapps/cs50/Cs50App');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/customapps/cs50/Cs50MenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/mpesapro': {
    id: 'mpesapro',
    _ref: 'magneta_application/mpesapro',
    AppId: 'mpesapro',
    packageName: '@sqwiromobileapiapps/mpesapro',
    appRoot: '@sqwiro/apiapps/mpesapro',
    RootComponent: MpesaproApp,
    MenuButton: MpesaproMenuButton,
    groupId: 'apiapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/apiapps/mpesapro/MpesaproApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/apiapps/mpesapro/MpesaproMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/website': {
    id: 'website',
    _ref: 'magneta_application/website',
    AppId: 'website',
    packageName: '@sqwiromobilecmsapps/website',
    appRoot: '@sqwiro/cmsapps/website',
    RootComponent: WebsiteApp,
    MenuButton: WebsiteMenuButton,
    groupId: 'cmsapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/cmsapps/website/WebsiteApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/cmsapps/website/WebsiteMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/avopro': {
    id: 'avopro',
    _ref: 'magneta_application/avopro',
    AppId: 'avopro',
    packageName: '@sqwiromobileagribusinessapps/avopro',
    appRoot: '@sqwiro/agribusinessapps/avopro',
    RootComponent: AvoproApp,
    MenuButton: AvoproMenuButton,
    groupId: 'agribusinessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/agribusinessapps/avopro/AvoproApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/agribusinessapps/avopro/AvoproMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/cstore': {
    id: 'cstore',
    _ref: 'magneta_application/cstore',
    AppId: 'cstore',
    packageName: '@sqwiromobileagribusinessapps/cstore',
    appRoot: '@sqwiro/agribusinessapps/cstore',
    RootComponent: CstoreApp,
    MenuButton: CstoreMenuButton,
    groupId: 'agribusinessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/agribusinessapps/cstore/CstoreApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/agribusinessapps/cstore/CstoreMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/farmbridge': {
    id: 'farmbridge',
    _ref: 'magneta_application/farmbridge',
    AppId: 'farmbridge',
    packageName: '@sqwiromobileagribusinessapps/farmbridge',
    appRoot: '@sqwiro/agribusinessapps/farmbridge',
    RootComponent: FarmbridgeApp,
    MenuButton: FarmbridgeMenuButton,
    groupId: 'agribusinessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/agribusinessapps/farmbridge/FarmbridgeApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/agribusinessapps/farmbridge/FarmbridgeMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/macspro': {
    id: 'macspro',
    _ref: 'magneta_application/macspro',
    AppId: 'macspro',
    packageName: '@sqwiromobileagribusinessapps/macspro',
    appRoot: '@sqwiro/agribusinessapps/macspro',
    RootComponent: MacsproApp,
    MenuButton: MacsproMenuButton,
    groupId: 'agribusinessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/agribusinessapps/macspro/MacsproApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/agribusinessapps/macspro/MacsproMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/seedlink': {
    id: 'seedlink',
    _ref: 'magneta_application/seedlink',
    AppId: 'seedlink',
    packageName: '@sqwiromobileagribusinessapps/seedlink',
    appRoot: '@sqwiro/agribusinessapps/seedlink',
    RootComponent: SeedlinkApp,
    MenuButton: SeedlinkMenuButton,
    groupId: 'agribusinessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/agribusinessapps/seedlink/SeedlinkApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/agribusinessapps/seedlink/SeedlinkMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartfarmagent': {
    id: 'smartfarmagent',
    _ref: 'magneta_application/smartfarmagent',
    AppId: 'smartfarmagent',
    packageName: '@sqwiromobileagribusinessapps/smartfarmagent',
    appRoot: '@sqwiro/agribusinessapps/smartfarmagent',
    RootComponent: SmartfarmagentApp,
    MenuButton: SmartfarmagentMenuButton,
    groupId: 'agribusinessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/agribusinessapps/smartfarmagent/SmartfarmagentApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/agribusinessapps/smartfarmagent/SmartfarmagentMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartfarmer': {
    id: 'smartfarmer',
    _ref: 'magneta_application/smartfarmer',
    AppId: 'smartfarmer',
    packageName: '@sqwiromobileagribusinessapps/smartfarmer',
    appRoot: '@sqwiro/agribusinessapps/smartfarmer',
    RootComponent: SmartfarmerApp,
    MenuButton: SmartfarmerMenuButton,
    groupId: 'agribusinessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/agribusinessapps/smartfarmer/SmartfarmerApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/agribusinessapps/smartfarmer/SmartfarmerMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartfarminspector': {
    id: 'smartfarminspector',
    _ref: 'magneta_application/smartfarminspector',
    AppId: 'smartfarminspector',
    packageName: '@sqwiromobileagribusinessapps/smartfarminspector',
    appRoot: '@sqwiro/agribusinessapps/smartfarminspector',
    RootComponent: SmartfarminspectorApp,
    MenuButton: SmartfarminspectorMenuButton,
    groupId: 'agribusinessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/agribusinessapps/smartfarminspector/SmartfarminspectorApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/agribusinessapps/smartfarminspector/SmartfarminspectorMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/saccomis': {
    id: 'saccomis',
    _ref: 'magneta_application/saccomis',
    AppId: 'saccomis',
    packageName: '@sqwiromobilesaccoapps/saccomis',
    appRoot: '@sqwiro/saccoapps/saccomis',
    RootComponent: SaccomisApp,
    MenuButton: SaccomisMenuButton,
    groupId: 'saccoapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/saccoapps/saccomis/SaccomisApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/saccoapps/saccomis/SaccomisMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartsaccowallet': {
    id: 'smartsaccowallet',
    _ref: 'magneta_application/smartsaccowallet',
    AppId: 'smartsaccowallet',
    packageName: '@sqwiromobilesaccoapps/smartsaccowallet',
    appRoot: '@sqwiro/saccoapps/smartsaccowallet',
    RootComponent: SmartsaccowalletApp,
    MenuButton: SmartsaccowalletMenuButton,
    groupId: 'saccoapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/saccoapps/smartsaccowallet/SmartsaccowalletApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/saccoapps/smartsaccowallet/SmartsaccowalletMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartvumaenterprisewallet': {
    id: 'smartvumaenterprisewallet',
    _ref: 'magneta_application/smartvumaenterprisewallet',
    AppId: 'smartvumaenterprisewallet',
    packageName: '@sqwiromobilesaccoapps/smartvumaenterprisewallet',
    appRoot: '@sqwiro/saccoapps/smartvumaenterprisewallet',
    RootComponent: SmartvumaenterprisewalletApp,
    MenuButton: SmartvumaenterprisewalletMenuButton,
    groupId: 'saccoapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/saccoapps/smartvumaenterprisewallet/SmartvumaenterprisewalletApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/saccoapps/smartvumaenterprisewallet/SmartvumaenterprisewalletMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/cartify': {
    id: 'cartify',
    _ref: 'magneta_application/cartify',
    AppId: 'cartify',
    packageName: '@sqwiromobileecommerceapps/cartify',
    appRoot: '@sqwiro/ecommerceapps/cartify',
    RootComponent: CartifyApp,
    MenuButton: CartifyMenuButton,
    groupId: 'ecommerceapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/ecommerceapps/cartify/CartifyApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/ecommerceapps/cartify/CartifyMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartshoppingcart': {
    id: 'smartshoppingcart',
    _ref: 'magneta_application/smartshoppingcart',
    AppId: 'smartshoppingcart',
    packageName: '@sqwiromobileecommerceapps/smartshoppingcart',
    appRoot: '@sqwiro/ecommerceapps/smartshoppingcart',
    RootComponent: SmartshoppingcartApp,
    MenuButton: SmartshoppingcartMenuButton,
    groupId: 'ecommerceapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/ecommerceapps/smartshoppingcart/SmartshoppingcartApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/ecommerceapps/smartshoppingcart/SmartshoppingcartMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartsqwiropay': {
    id: 'smartsqwiropay',
    _ref: 'magneta_application/smartsqwiropay',
    AppId: 'smartsqwiropay',
    packageName: '@sqwiromobileecommerceapps/smartsqwiropay',
    appRoot: '@sqwiro/ecommerceapps/smartsqwiropay',
    RootComponent: SmartsqwiropayApp,
    MenuButton: SmartsqwiropayMenuButton,
    groupId: 'ecommerceapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/ecommerceapps/smartsqwiropay/SmartsqwiropayApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/ecommerceapps/smartsqwiropay/SmartsqwiropayMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/fleetmanager': {
    id: 'fleetmanager',
    _ref: 'magneta_application/fleetmanager',
    AppId: 'fleetmanager',
    packageName: '@sqwiromobiletransportapps/fleetmanager',
    appRoot: '@sqwiro/transportapps/fleetmanager',
    RootComponent: FleetmanagerApp,
    MenuButton: FleetmanagerMenuButton,
    groupId: 'transportapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/transportapps/fleetmanager/FleetmanagerApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/transportapps/fleetmanager/FleetmanagerMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartdriver': {
    id: 'smartdriver',
    _ref: 'magneta_application/smartdriver',
    AppId: 'smartdriver',
    packageName: '@sqwiromobiletransportapps/smartdriver',
    appRoot: '@sqwiro/transportapps/smartdriver',
    RootComponent: SmartdriverApp,
    MenuButton: SmartdriverMenuButton,
    groupId: 'transportapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/transportapps/smartdriver/SmartdriverApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/transportapps/smartdriver/SmartdriverMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/agencypro': {
    id: 'agencypro',
    _ref: 'magneta_application/agencypro',
    AppId: 'agencypro',
    packageName: '@sqwiromobilefintechapps/agencypro',
    appRoot: '@sqwiro/fintechapps/agencypro',
    RootComponent: AgencyproApp,
    MenuButton: AgencyproMenuButton,
    groupId: 'fintechapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/fintechapps/agencypro/AgencyproApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/fintechapps/agencypro/AgencyproMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/enterprisewallet': {
    id: 'enterprisewallet',
    _ref: 'magneta_application/enterprisewallet',
    AppId: 'enterprisewallet',
    packageName: '@sqwiromobilefintechapps/enterprisewallet',
    appRoot: '@sqwiro/fintechapps/enterprisewallet',
    RootComponent: EnterprisewalletApp,
    MenuButton: EnterprisewalletMenuButton,
    groupId: 'fintechapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/fintechapps/enterprisewallet/EnterprisewalletApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/fintechapps/enterprisewallet/EnterprisewalletMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/ppcore': {
    id: 'ppcore',
    _ref: 'magneta_application/ppcore',
    AppId: 'ppcore',
    packageName: '@sqwiromobilefintechapps/ppcore',
    appRoot: '@sqwiro/fintechapps/ppcore',
    RootComponent: PpcoreApp,
    MenuButton: PpcoreMenuButton,
    groupId: 'fintechapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/fintechapps/ppcore/PpcoreApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/fintechapps/ppcore/PpcoreMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/ppwallet': {
    id: 'ppwallet',
    _ref: 'magneta_application/ppwallet',
    AppId: 'ppwallet',
    packageName: '@sqwiromobilefintechapps/ppwallet',
    appRoot: '@sqwiro/fintechapps/ppwallet',
    RootComponent: PpwalletApp,
    MenuButton: PpwalletMenuButton,
    groupId: 'fintechapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/fintechapps/ppwallet/PpwalletApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/fintechapps/ppwallet/PpwalletMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartpesapurse': {
    id: 'smartpesapurse',
    _ref: 'magneta_application/smartpesapurse',
    AppId: 'smartpesapurse',
    packageName: '@sqwiromobilefintechapps/smartpesapurse',
    appRoot: '@sqwiro/fintechapps/smartpesapurse',
    RootComponent: SmartpesapurseApp,
    MenuButton: SmartpesapurseMenuButton,
    groupId: 'fintechapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/fintechapps/smartpesapurse/SmartpesapurseApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/fintechapps/smartpesapurse/SmartpesapurseMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/finance': {
    id: 'finance',
    _ref: 'magneta_application/finance',
    AppId: 'finance',
    packageName: '@sqwiromobilebusinessapps/finance',
    appRoot: '@sqwiro/businessapps/finance',
    RootComponent: FinanceApp,
    MenuButton: FinanceMenuButton,
    groupId: 'businessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/businessapps/finance/FinanceApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/businessapps/finance/FinanceMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/makerchecker': {
    id: 'makerchecker',
    _ref: 'magneta_application/makerchecker',
    AppId: 'makerchecker',
    packageName: '@sqwiromobilebusinessapps/makerchecker',
    appRoot: '@sqwiro/businessapps/makerchecker',
    RootComponent: MakercheckerApp,
    MenuButton: MakercheckerMenuButton,
    groupId: 'businessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/businessapps/makerchecker/MakercheckerApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/businessapps/makerchecker/MakercheckerMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/masterdata': {
    id: 'masterdata',
    _ref: 'magneta_application/masterdata',
    AppId: 'masterdata',
    packageName: '@sqwiromobilebusinessapps/masterdata',
    appRoot: '@sqwiro/businessapps/masterdata',
    RootComponent: MasterdataApp,
    MenuButton: MasterdataMenuButton,
    groupId: 'businessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/businessapps/masterdata/MasterdataApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/businessapps/masterdata/MasterdataMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/mediamanager': {
    id: 'mediamanager',
    _ref: 'magneta_application/mediamanager',
    AppId: 'mediamanager',
    packageName: '@sqwiromobilebusinessapps/mediamanager',
    appRoot: '@sqwiro/businessapps/mediamanager',
    RootComponent: MediamanagerApp,
    MenuButton: MediamanagerMenuButton,
    groupId: 'businessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/businessapps/mediamanager/MediamanagerApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/businessapps/mediamanager/MediamanagerMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/procurement': {
    id: 'procurement',
    _ref: 'magneta_application/procurement',
    AppId: 'procurement',
    packageName: '@sqwiromobilebusinessapps/procurement',
    appRoot: '@sqwiro/businessapps/procurement',
    RootComponent: ProcurementApp,
    MenuButton: ProcurementMenuButton,
    groupId: 'businessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/businessapps/procurement/ProcurementApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/businessapps/procurement/ProcurementMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/retail': {
    id: 'retail',
    _ref: 'magneta_application/retail',
    AppId: 'retail',
    packageName: '@sqwiromobilebusinessapps/retail',
    appRoot: '@sqwiro/businessapps/retail',
    RootComponent: RetailApp,
    MenuButton: RetailMenuButton,
    groupId: 'businessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/businessapps/retail/RetailApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/businessapps/retail/RetailMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/sales': {
    id: 'sales',
    _ref: 'magneta_application/sales',
    AppId: 'sales',
    packageName: '@sqwiromobilebusinessapps/sales',
    appRoot: '@sqwiro/businessapps/sales',
    RootComponent: SalesApp,
    MenuButton: SalesMenuButton,
    groupId: 'businessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/businessapps/sales/SalesApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/businessapps/sales/SalesMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartapprover': {
    id: 'smartapprover',
    _ref: 'magneta_application/smartapprover',
    AppId: 'smartapprover',
    packageName: '@sqwiromobilebusinessapps/smartapprover',
    appRoot: '@sqwiro/businessapps/smartapprover',
    RootComponent: SmartapproverApp,
    MenuButton: SmartapproverMenuButton,
    groupId: 'businessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/businessapps/smartapprover/SmartapproverApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/businessapps/smartapprover/SmartapproverMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartvendoraccount': {
    id: 'smartvendoraccount',
    _ref: 'magneta_application/smartvendoraccount',
    AppId: 'smartvendoraccount',
    packageName: '@sqwiromobilebusinessapps/smartvendoraccount',
    appRoot: '@sqwiro/businessapps/smartvendoraccount',
    RootComponent: SmartvendoraccountApp,
    MenuButton: SmartvendoraccountMenuButton,
    groupId: 'businessapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/businessapps/smartvendoraccount/SmartvendoraccountApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/businessapps/smartvendoraccount/SmartvendoraccountMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/system': {
    id: 'system',
    _ref: 'magneta_application/system',
    AppId: 'system',
    packageName: '@sqwiromobilesystemapps/system',
    appRoot: '@sqwiro/systemapps/system',
    RootComponent: SystemApp,
    MenuButton: SystemMenuButton,
    groupId: 'systemapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/systemapps/system/SystemApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/systemapps/system/SystemMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartcustomerhelp': {
    id: 'smartcustomerhelp',
    _ref: 'magneta_application/smartcustomerhelp',
    AppId: 'smartcustomerhelp',
    packageName: '@sqwiromobilecustomercareapps/smartcustomerhelp',
    appRoot: '@sqwiro/customercareapps/smartcustomerhelp',
    RootComponent: SmartcustomerhelpApp,
    MenuButton: SmartcustomerhelpMenuButton,
    groupId: 'customercareapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/customercareapps/smartcustomerhelp/SmartcustomerhelpApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/customercareapps/smartcustomerhelp/SmartcustomerhelpMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartsqwirosupport': {
    id: 'smartsqwirosupport',
    _ref: 'magneta_application/smartsqwirosupport',
    AppId: 'smartsqwirosupport',
    packageName: '@sqwiromobilecustomercareapps/smartsqwirosupport',
    appRoot: '@sqwiro/customercareapps/smartsqwirosupport',
    RootComponent: SmartsqwirosupportApp,
    MenuButton: SmartsqwirosupportMenuButton,
    groupId: 'customercareapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/customercareapps/smartsqwirosupport/SmartsqwirosupportApp'
            );
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import(
              '@sqwiro/customercareapps/smartsqwirosupport/SmartsqwirosupportMenuButton'
            );
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/sqwiropay': {
    id: 'sqwiropay',
    _ref: 'magneta_application/sqwiropay',
    AppId: 'sqwiropay',
    packageName: '@sqwiromobilecloudhubapps/sqwiropay',
    appRoot: '@sqwiro/cloudhubapps/sqwiropay',
    RootComponent: SqwiropayApp,
    MenuButton: SqwiropayMenuButton,
    groupId: 'cloudhubapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/cloudhubapps/sqwiropay/SqwiropayApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/cloudhubapps/sqwiropay/SqwiropayMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/hr': {
    id: 'hr',
    _ref: 'magneta_application/hr',
    AppId: 'hr',
    packageName: '@sqwiromobilehrapps/hr',
    appRoot: '@sqwiro/hrapps/hr',
    RootComponent: HrApp,
    MenuButton: HrMenuButton,
    groupId: 'hrapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/hrapps/hr/HrApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/hrapps/hr/HrMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
  'magneta_application/smartstaff': {
    id: 'smartstaff',
    _ref: 'magneta_application/smartstaff',
    AppId: 'smartstaff',
    packageName: '@sqwiromobilehrapps/smartstaff',
    appRoot: '@sqwiro/hrapps/smartstaff',
    RootComponent: SmartstaffApp,
    MenuButton: SmartstaffMenuButton,
    groupId: 'hrapps',
    loadComponent: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/hrapps/smartstaff/SmartstaffApp');
          }}
          fallback={<LoadingComponent />}
          errorFallback={AppNotFound}
        />
      );
    },
    loadMenuButton: () => {
      return (
        <SafeLazy
          loader={() => {
            return import('@sqwiro/hrapps/smartstaff/SmartstaffMenuButton');
          }}
          fallback={<LoadingMenuButton />}
          errorFallback={<LoadingMenuButton />}
        />
      );
    },
  },
};

export default installedApps;
