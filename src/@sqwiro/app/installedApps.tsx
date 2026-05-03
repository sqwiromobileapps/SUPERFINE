
      import React from 'react';
      import { SafeLazy, Block } from '@expocraft/core';
      import AppNotFound from '@sqwiro/appcore/utils/AppNotFound';
      import { ScreenLoading } from '@sqwiro/appcore/utils';
      import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';
      import { MenuButton } from '@expocraft/core/lib/widgets';
      import { Images, colors } from '@sqwiro/app/theme';


      
        import { EnterprisewalletMenuButton } from '@sqwiro/userapps/enterprisewallet/EnterprisewalletMenuButton';
        import { EnterprisewalletApp } from '@sqwiro/userapps/enterprisewallet/EnterprisewalletApp';
        
        import { SaccowalletMenuButton } from '@sqwiro/userapps/saccowallet/SaccowalletMenuButton';
        import { SaccowalletApp } from '@sqwiro/userapps/saccowallet/SaccowalletApp';
        
        import { ShoppingcartMenuButton } from '@sqwiro/userapps/shoppingcart/ShoppingcartMenuButton';
        import { ShoppingcartApp } from '@sqwiro/userapps/shoppingcart/ShoppingcartApp';
        
        import { SmartapproverMenuButton } from '@sqwiro/userapps/smartapprover/SmartapproverMenuButton';
        import { SmartapproverApp } from '@sqwiro/userapps/smartapprover/SmartapproverApp';
        
        import { SmartdriverMenuButton } from '@sqwiro/userapps/smartdriver/SmartdriverMenuButton';
        import { SmartdriverApp } from '@sqwiro/userapps/smartdriver/SmartdriverApp';
        
        import { SmartfarmerMenuButton } from '@sqwiro/userapps/smartfarmer/SmartfarmerMenuButton';
        import { SmartfarmerApp } from '@sqwiro/userapps/smartfarmer/SmartfarmerApp';
        
        import { SmartpesapurseMenuButton } from '@sqwiro/userapps/smartpesapurse/SmartpesapurseMenuButton';
        import { SmartpesapurseApp } from '@sqwiro/userapps/smartpesapurse/SmartpesapurseApp';
        
        import { SmartsqwirosupportMenuButton } from '@sqwiro/userapps/smartsqwirosupport/SmartsqwirosupportMenuButton';
        import { SmartsqwirosupportApp } from '@sqwiro/userapps/smartsqwirosupport/SmartsqwirosupportApp';
        
        import { SmartstaffMenuButton } from '@sqwiro/userapps/smartstaff/SmartstaffMenuButton';
        import { SmartstaffApp } from '@sqwiro/userapps/smartstaff/SmartstaffApp';
        
        import { SmartsupportMenuButton } from '@sqwiro/userapps/smartsupport/SmartsupportMenuButton';
        import { SmartsupportApp } from '@sqwiro/userapps/smartsupport/SmartsupportApp';
        
        import { SmartvendoraccountMenuButton } from '@sqwiro/userapps/smartvendoraccount/SmartvendoraccountMenuButton';
        import { SmartvendoraccountApp } from '@sqwiro/userapps/smartvendoraccount/SmartvendoraccountApp';
        
        import { SqwiropayMenuButton } from '@sqwiro/userapps/sqwiropay/SqwiropayMenuButton';
        import { SqwiropayApp } from '@sqwiro/userapps/sqwiropay/SqwiropayApp';
        
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
        
        import { SaccomisMenuButton } from '@sqwiro/saccoapps/saccomis/SaccomisMenuButton';
        import { SaccomisApp } from '@sqwiro/saccoapps/saccomis/SaccomisApp';
        
        import { AgencyproMenuButton } from '@sqwiro/fintechapps/agencypro/AgencyproMenuButton';
        import { AgencyproApp } from '@sqwiro/fintechapps/agencypro/AgencyproApp';
        
        import { PpcoreMenuButton } from '@sqwiro/fintechapps/ppcore/PpcoreMenuButton';
        import { PpcoreApp } from '@sqwiro/fintechapps/ppcore/PpcoreApp';
        
        import { PpwalletMenuButton } from '@sqwiro/fintechapps/ppwallet/PpwalletMenuButton';
        import { PpwalletApp } from '@sqwiro/fintechapps/ppwallet/PpwalletApp';
        
        import { CartifyMenuButton } from '@sqwiro/businessapps/cartify/CartifyMenuButton';
        import { CartifyApp } from '@sqwiro/businessapps/cartify/CartifyApp';
        
        import { FinanceMenuButton } from '@sqwiro/businessapps/finance/FinanceMenuButton';
        import { FinanceApp } from '@sqwiro/businessapps/finance/FinanceApp';
        
        import { FleetmanagerMenuButton } from '@sqwiro/businessapps/fleetmanager/FleetmanagerMenuButton';
        import { FleetmanagerApp } from '@sqwiro/businessapps/fleetmanager/FleetmanagerApp';
        
        import { HrMenuButton } from '@sqwiro/businessapps/hr/HrMenuButton';
        import { HrApp } from '@sqwiro/businessapps/hr/HrApp';
        
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
        
        import { SystemMenuButton } from '@sqwiro/businessapps/system/SystemMenuButton';
        import { SystemApp } from '@sqwiro/businessapps/system/SystemApp';
        



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

      export const installedApps ={ "magneta_userapplication/enterprisewallet": {
          id: "enterprisewallet",
          _ref: "magneta_userapplication/enterprisewallet",
          AppId: "enterprisewallet",
          packageName: "@sqwiromobileuserapps/enterprisewallet",
          appRoot: "@sqwiro/userapps/enterprisewallet",
          RootComponent: EnterprisewalletApp,
          MenuButton: EnterprisewalletMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/enterprisewallet/EnterprisewalletApp");
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
                   return import("@sqwiro/userapps/enterprisewallet/EnterprisewalletMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_userapplication/saccowallet": {
          id: "saccowallet",
          _ref: "magneta_userapplication/saccowallet",
          AppId: "saccowallet",
          packageName: "@sqwiromobileuserapps/saccowallet",
          appRoot: "@sqwiro/userapps/saccowallet",
          RootComponent: SaccowalletApp,
          MenuButton: SaccowalletMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/saccowallet/SaccowalletApp");
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
                   return import("@sqwiro/userapps/saccowallet/SaccowalletMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_userapplication/shoppingcart": {
          id: "shoppingcart",
          _ref: "magneta_userapplication/shoppingcart",
          AppId: "shoppingcart",
          packageName: "@sqwiromobileuserapps/shoppingcart",
          appRoot: "@sqwiro/userapps/shoppingcart",
          RootComponent: ShoppingcartApp,
          MenuButton: ShoppingcartMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/shoppingcart/ShoppingcartApp");
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
                   return import("@sqwiro/userapps/shoppingcart/ShoppingcartMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_userapplication/smartapprover": {
          id: "smartapprover",
          _ref: "magneta_userapplication/smartapprover",
          AppId: "smartapprover",
          packageName: "@sqwiromobileuserapps/smartapprover",
          appRoot: "@sqwiro/userapps/smartapprover",
          RootComponent: SmartapproverApp,
          MenuButton: SmartapproverMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/smartapprover/SmartapproverApp");
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
                   return import("@sqwiro/userapps/smartapprover/SmartapproverMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_userapplication/smartdriver": {
          id: "smartdriver",
          _ref: "magneta_userapplication/smartdriver",
          AppId: "smartdriver",
          packageName: "@sqwiromobileuserapps/smartdriver",
          appRoot: "@sqwiro/userapps/smartdriver",
          RootComponent: SmartdriverApp,
          MenuButton: SmartdriverMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/smartdriver/SmartdriverApp");
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
                   return import("@sqwiro/userapps/smartdriver/SmartdriverMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_userapplication/smartfarmer": {
          id: "smartfarmer",
          _ref: "magneta_userapplication/smartfarmer",
          AppId: "smartfarmer",
          packageName: "@sqwiromobileuserapps/smartfarmer",
          appRoot: "@sqwiro/userapps/smartfarmer",
          RootComponent: SmartfarmerApp,
          MenuButton: SmartfarmerMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/smartfarmer/SmartfarmerApp");
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
                   return import("@sqwiro/userapps/smartfarmer/SmartfarmerMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_userapplication/smartpesapurse": {
          id: "smartpesapurse",
          _ref: "magneta_userapplication/smartpesapurse",
          AppId: "smartpesapurse",
          packageName: "@sqwiromobileuserapps/smartpesapurse",
          appRoot: "@sqwiro/userapps/smartpesapurse",
          RootComponent: SmartpesapurseApp,
          MenuButton: SmartpesapurseMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/smartpesapurse/SmartpesapurseApp");
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
                   return import("@sqwiro/userapps/smartpesapurse/SmartpesapurseMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_userapplication/smartsqwirosupport": {
          id: "smartsqwirosupport",
          _ref: "magneta_userapplication/smartsqwirosupport",
          AppId: "smartsqwirosupport",
          packageName: "@sqwiromobileuserapps/smartsqwirosupport",
          appRoot: "@sqwiro/userapps/smartsqwirosupport",
          RootComponent: SmartsqwirosupportApp,
          MenuButton: SmartsqwirosupportMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/smartsqwirosupport/SmartsqwirosupportApp");
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
                   return import("@sqwiro/userapps/smartsqwirosupport/SmartsqwirosupportMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_userapplication/smartstaff": {
          id: "smartstaff",
          _ref: "magneta_userapplication/smartstaff",
          AppId: "smartstaff",
          packageName: "@sqwiromobileuserapps/smartstaff",
          appRoot: "@sqwiro/userapps/smartstaff",
          RootComponent: SmartstaffApp,
          MenuButton: SmartstaffMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/smartstaff/SmartstaffApp");
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
                   return import("@sqwiro/userapps/smartstaff/SmartstaffMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_userapplication/smartsupport": {
          id: "smartsupport",
          _ref: "magneta_userapplication/smartsupport",
          AppId: "smartsupport",
          packageName: "@sqwiromobileuserapps/smartsupport",
          appRoot: "@sqwiro/userapps/smartsupport",
          RootComponent: SmartsupportApp,
          MenuButton: SmartsupportMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/smartsupport/SmartsupportApp");
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
                   return import("@sqwiro/userapps/smartsupport/SmartsupportMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_userapplication/smartvendoraccount": {
          id: "smartvendoraccount",
          _ref: "magneta_userapplication/smartvendoraccount",
          AppId: "smartvendoraccount",
          packageName: "@sqwiromobileuserapps/smartvendoraccount",
          appRoot: "@sqwiro/userapps/smartvendoraccount",
          RootComponent: SmartvendoraccountApp,
          MenuButton: SmartvendoraccountMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/smartvendoraccount/SmartvendoraccountApp");
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
                   return import("@sqwiro/userapps/smartvendoraccount/SmartvendoraccountMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_userapplication/sqwiropay": {
          id: "sqwiropay",
          _ref: "magneta_userapplication/sqwiropay",
          AppId: "sqwiropay",
          packageName: "@sqwiromobileuserapps/sqwiropay",
          appRoot: "@sqwiro/userapps/sqwiropay",
          RootComponent: SqwiropayApp,
          MenuButton: SqwiropayMenuButton,
          groupId: "userapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/userapps/sqwiropay/SqwiropayApp");
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
                   return import("@sqwiro/userapps/sqwiropay/SqwiropayMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/cs50": {
          id: "cs50",
          _ref: "magneta_application/cs50",
          AppId: "cs50",
          packageName: "@sqwiromobilecustomapps/cs50",
          appRoot: "@sqwiro/customapps/cs50",
          RootComponent: Cs50App,
          MenuButton: Cs50MenuButton,
          groupId: "customapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/customapps/cs50/Cs50App");
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
                   return import("@sqwiro/customapps/cs50/Cs50MenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/mpesapro": {
          id: "mpesapro",
          _ref: "magneta_application/mpesapro",
          AppId: "mpesapro",
          packageName: "@sqwiromobileapiapps/mpesapro",
          appRoot: "@sqwiro/apiapps/mpesapro",
          RootComponent: MpesaproApp,
          MenuButton: MpesaproMenuButton,
          groupId: "apiapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/apiapps/mpesapro/MpesaproApp");
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
                   return import("@sqwiro/apiapps/mpesapro/MpesaproMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/website": {
          id: "website",
          _ref: "magneta_application/website",
          AppId: "website",
          packageName: "@sqwiromobilecmsapps/website",
          appRoot: "@sqwiro/cmsapps/website",
          RootComponent: WebsiteApp,
          MenuButton: WebsiteMenuButton,
          groupId: "cmsapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/cmsapps/website/WebsiteApp");
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
                   return import("@sqwiro/cmsapps/website/WebsiteMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/avopro": {
          id: "avopro",
          _ref: "magneta_application/avopro",
          AppId: "avopro",
          packageName: "@sqwiromobileagribusinessapps/avopro",
          appRoot: "@sqwiro/agribusinessapps/avopro",
          RootComponent: AvoproApp,
          MenuButton: AvoproMenuButton,
          groupId: "agribusinessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/agribusinessapps/avopro/AvoproApp");
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
                   return import("@sqwiro/agribusinessapps/avopro/AvoproMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/cstore": {
          id: "cstore",
          _ref: "magneta_application/cstore",
          AppId: "cstore",
          packageName: "@sqwiromobileagribusinessapps/cstore",
          appRoot: "@sqwiro/agribusinessapps/cstore",
          RootComponent: CstoreApp,
          MenuButton: CstoreMenuButton,
          groupId: "agribusinessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/agribusinessapps/cstore/CstoreApp");
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
                   return import("@sqwiro/agribusinessapps/cstore/CstoreMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/farmbridge": {
          id: "farmbridge",
          _ref: "magneta_application/farmbridge",
          AppId: "farmbridge",
          packageName: "@sqwiromobileagribusinessapps/farmbridge",
          appRoot: "@sqwiro/agribusinessapps/farmbridge",
          RootComponent: FarmbridgeApp,
          MenuButton: FarmbridgeMenuButton,
          groupId: "agribusinessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/agribusinessapps/farmbridge/FarmbridgeApp");
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
                   return import("@sqwiro/agribusinessapps/farmbridge/FarmbridgeMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/macspro": {
          id: "macspro",
          _ref: "magneta_application/macspro",
          AppId: "macspro",
          packageName: "@sqwiromobileagribusinessapps/macspro",
          appRoot: "@sqwiro/agribusinessapps/macspro",
          RootComponent: MacsproApp,
          MenuButton: MacsproMenuButton,
          groupId: "agribusinessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/agribusinessapps/macspro/MacsproApp");
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
                   return import("@sqwiro/agribusinessapps/macspro/MacsproMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/seedlink": {
          id: "seedlink",
          _ref: "magneta_application/seedlink",
          AppId: "seedlink",
          packageName: "@sqwiromobileagribusinessapps/seedlink",
          appRoot: "@sqwiro/agribusinessapps/seedlink",
          RootComponent: SeedlinkApp,
          MenuButton: SeedlinkMenuButton,
          groupId: "agribusinessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/agribusinessapps/seedlink/SeedlinkApp");
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
                   return import("@sqwiro/agribusinessapps/seedlink/SeedlinkMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/saccomis": {
          id: "saccomis",
          _ref: "magneta_application/saccomis",
          AppId: "saccomis",
          packageName: "@sqwiromobilesaccoapps/saccomis",
          appRoot: "@sqwiro/saccoapps/saccomis",
          RootComponent: SaccomisApp,
          MenuButton: SaccomisMenuButton,
          groupId: "saccoapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/saccoapps/saccomis/SaccomisApp");
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
                   return import("@sqwiro/saccoapps/saccomis/SaccomisMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/agencypro": {
          id: "agencypro",
          _ref: "magneta_application/agencypro",
          AppId: "agencypro",
          packageName: "@sqwiromobilefintechapps/agencypro",
          appRoot: "@sqwiro/fintechapps/agencypro",
          RootComponent: AgencyproApp,
          MenuButton: AgencyproMenuButton,
          groupId: "fintechapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/fintechapps/agencypro/AgencyproApp");
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
                   return import("@sqwiro/fintechapps/agencypro/AgencyproMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/ppcore": {
          id: "ppcore",
          _ref: "magneta_application/ppcore",
          AppId: "ppcore",
          packageName: "@sqwiromobilefintechapps/ppcore",
          appRoot: "@sqwiro/fintechapps/ppcore",
          RootComponent: PpcoreApp,
          MenuButton: PpcoreMenuButton,
          groupId: "fintechapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/fintechapps/ppcore/PpcoreApp");
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
                   return import("@sqwiro/fintechapps/ppcore/PpcoreMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/ppwallet": {
          id: "ppwallet",
          _ref: "magneta_application/ppwallet",
          AppId: "ppwallet",
          packageName: "@sqwiromobilefintechapps/ppwallet",
          appRoot: "@sqwiro/fintechapps/ppwallet",
          RootComponent: PpwalletApp,
          MenuButton: PpwalletMenuButton,
          groupId: "fintechapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/fintechapps/ppwallet/PpwalletApp");
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
                   return import("@sqwiro/fintechapps/ppwallet/PpwalletMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/cartify": {
          id: "cartify",
          _ref: "magneta_application/cartify",
          AppId: "cartify",
          packageName: "@sqwiromobilebusinessapps/cartify",
          appRoot: "@sqwiro/businessapps/cartify",
          RootComponent: CartifyApp,
          MenuButton: CartifyMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/businessapps/cartify/CartifyApp");
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
                   return import("@sqwiro/businessapps/cartify/CartifyMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/finance": {
          id: "finance",
          _ref: "magneta_application/finance",
          AppId: "finance",
          packageName: "@sqwiromobilebusinessapps/finance",
          appRoot: "@sqwiro/businessapps/finance",
          RootComponent: FinanceApp,
          MenuButton: FinanceMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/businessapps/finance/FinanceApp");
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
                   return import("@sqwiro/businessapps/finance/FinanceMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/fleetmanager": {
          id: "fleetmanager",
          _ref: "magneta_application/fleetmanager",
          AppId: "fleetmanager",
          packageName: "@sqwiromobilebusinessapps/fleetmanager",
          appRoot: "@sqwiro/businessapps/fleetmanager",
          RootComponent: FleetmanagerApp,
          MenuButton: FleetmanagerMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/businessapps/fleetmanager/FleetmanagerApp");
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
                   return import("@sqwiro/businessapps/fleetmanager/FleetmanagerMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/hr": {
          id: "hr",
          _ref: "magneta_application/hr",
          AppId: "hr",
          packageName: "@sqwiromobilebusinessapps/hr",
          appRoot: "@sqwiro/businessapps/hr",
          RootComponent: HrApp,
          MenuButton: HrMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/businessapps/hr/HrApp");
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
                   return import("@sqwiro/businessapps/hr/HrMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/makerchecker": {
          id: "makerchecker",
          _ref: "magneta_application/makerchecker",
          AppId: "makerchecker",
          packageName: "@sqwiromobilebusinessapps/makerchecker",
          appRoot: "@sqwiro/businessapps/makerchecker",
          RootComponent: MakercheckerApp,
          MenuButton: MakercheckerMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/businessapps/makerchecker/MakercheckerApp");
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
                   return import("@sqwiro/businessapps/makerchecker/MakercheckerMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/masterdata": {
          id: "masterdata",
          _ref: "magneta_application/masterdata",
          AppId: "masterdata",
          packageName: "@sqwiromobilebusinessapps/masterdata",
          appRoot: "@sqwiro/businessapps/masterdata",
          RootComponent: MasterdataApp,
          MenuButton: MasterdataMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/businessapps/masterdata/MasterdataApp");
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
                   return import("@sqwiro/businessapps/masterdata/MasterdataMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/mediamanager": {
          id: "mediamanager",
          _ref: "magneta_application/mediamanager",
          AppId: "mediamanager",
          packageName: "@sqwiromobilebusinessapps/mediamanager",
          appRoot: "@sqwiro/businessapps/mediamanager",
          RootComponent: MediamanagerApp,
          MenuButton: MediamanagerMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/businessapps/mediamanager/MediamanagerApp");
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
                   return import("@sqwiro/businessapps/mediamanager/MediamanagerMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/procurement": {
          id: "procurement",
          _ref: "magneta_application/procurement",
          AppId: "procurement",
          packageName: "@sqwiromobilebusinessapps/procurement",
          appRoot: "@sqwiro/businessapps/procurement",
          RootComponent: ProcurementApp,
          MenuButton: ProcurementMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/businessapps/procurement/ProcurementApp");
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
                   return import("@sqwiro/businessapps/procurement/ProcurementMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/retail": {
          id: "retail",
          _ref: "magneta_application/retail",
          AppId: "retail",
          packageName: "@sqwiromobilebusinessapps/retail",
          appRoot: "@sqwiro/businessapps/retail",
          RootComponent: RetailApp,
          MenuButton: RetailMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/businessapps/retail/RetailApp");
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
                   return import("@sqwiro/businessapps/retail/RetailMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/sales": {
          id: "sales",
          _ref: "magneta_application/sales",
          AppId: "sales",
          packageName: "@sqwiromobilebusinessapps/sales",
          appRoot: "@sqwiro/businessapps/sales",
          RootComponent: SalesApp,
          MenuButton: SalesMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/businessapps/sales/SalesApp");
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
                   return import("@sqwiro/businessapps/sales/SalesMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/system": {
          id: "system",
          _ref: "magneta_application/system",
          AppId: "system",
          packageName: "@sqwiromobilebusinessapps/system",
          appRoot: "@sqwiro/businessapps/system",
          RootComponent: SystemApp,
          MenuButton: SystemMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={() => {
                  return import("@sqwiro/businessapps/system/SystemApp");
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
                   return import("@sqwiro/businessapps/system/SystemMenuButton");
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        } }

      export default installedApps;
      