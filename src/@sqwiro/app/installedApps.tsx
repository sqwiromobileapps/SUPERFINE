
      import React from 'react';
      // LEGACY-ALLOWED: installed-app loader, no clean twin (allow-list plumbing)
      import { SafeLazy } from '@expocraft/baseui/legacy';
      import { AppTile, Stack } from '@expocraft/baseui';
      import AppNotFound from '@sqwiro/appcore/utils/AppNotFound';
      import { ScreenLoading } from '@sqwiro/appcore/utils';
      import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';
      import { Images } from '@sqwiro/appcore/theme';

      // MOB-296: an app's root as a component that loads the app's code the first time it renders. No error
      // boundary of its own, so an app that throws fails as it did when it was imported at launch.
      function lazyRoot(loader: () => Promise<any>, name: string) {
        const Root = React.lazy(() =>
          loader().then((module) => ({ default: module[name] || module.default }))
        );
        function LazyRoot(props: any) {
          return (
            <React.Suspense fallback={<LoadingComponent />}>
              <Root {...props} />
            </React.Suspense>
          );
        }
        LazyRoot.displayName = name;
        return LazyRoot;
      }

      
        import { Cs50MenuButton } from '@sqwiro/customapps/cs50/Cs50MenuButton';
        const loadCs50App = () => Promise.resolve().then(() => require("@sqwiro/customapps/cs50/Cs50App"));
        const Cs50App = lazyRoot(loadCs50App, "Cs50App");
        
        import { MpesaproMenuButton } from '@sqwiro/apiapps/mpesapro/MpesaproMenuButton';
        const loadMpesaproApp = () => Promise.resolve().then(() => require("@sqwiro/apiapps/mpesapro/MpesaproApp"));
        const MpesaproApp = lazyRoot(loadMpesaproApp, "MpesaproApp");
        
        import { WebsiteMenuButton } from '@sqwiro/cmsapps/website/WebsiteMenuButton';
        const loadWebsiteApp = () => Promise.resolve().then(() => require("@sqwiro/cmsapps/website/WebsiteApp"));
        const WebsiteApp = lazyRoot(loadWebsiteApp, "WebsiteApp");
        
        import { AvoproMenuButton } from '@sqwiro/agribusinessapps/avopro/AvoproMenuButton';
        const loadAvoproApp = () => Promise.resolve().then(() => require("@sqwiro/agribusinessapps/avopro/AvoproApp"));
        const AvoproApp = lazyRoot(loadAvoproApp, "AvoproApp");
        
        import { CstoreMenuButton } from '@sqwiro/agribusinessapps/cstore/CstoreMenuButton';
        const loadCstoreApp = () => Promise.resolve().then(() => require("@sqwiro/agribusinessapps/cstore/CstoreApp"));
        const CstoreApp = lazyRoot(loadCstoreApp, "CstoreApp");
        
        import { FarmbridgeMenuButton } from '@sqwiro/agribusinessapps/farmbridge/FarmbridgeMenuButton';
        const loadFarmbridgeApp = () => Promise.resolve().then(() => require("@sqwiro/agribusinessapps/farmbridge/FarmbridgeApp"));
        const FarmbridgeApp = lazyRoot(loadFarmbridgeApp, "FarmbridgeApp");
        
        import { MacsproMenuButton } from '@sqwiro/agribusinessapps/macspro/MacsproMenuButton';
        const loadMacsproApp = () => Promise.resolve().then(() => require("@sqwiro/agribusinessapps/macspro/MacsproApp"));
        const MacsproApp = lazyRoot(loadMacsproApp, "MacsproApp");
        
        import { OutsourcedavoproMenuButton } from '@sqwiro/agribusinessapps/outsourcedavopro/OutsourcedavoproMenuButton';
        const loadOutsourcedavoproApp = () => Promise.resolve().then(() => require("@sqwiro/agribusinessapps/outsourcedavopro/OutsourcedavoproApp"));
        const OutsourcedavoproApp = lazyRoot(loadOutsourcedavoproApp, "OutsourcedavoproApp");
        
        import { OutsourcedmacsproMenuButton } from '@sqwiro/agribusinessapps/outsourcedmacspro/OutsourcedmacsproMenuButton';
        const loadOutsourcedmacsproApp = () => Promise.resolve().then(() => require("@sqwiro/agribusinessapps/outsourcedmacspro/OutsourcedmacsproApp"));
        const OutsourcedmacsproApp = lazyRoot(loadOutsourcedmacsproApp, "OutsourcedmacsproApp");
        
        import { SeedlinkMenuButton } from '@sqwiro/agribusinessapps/seedlink/SeedlinkMenuButton';
        const loadSeedlinkApp = () => Promise.resolve().then(() => require("@sqwiro/agribusinessapps/seedlink/SeedlinkApp"));
        const SeedlinkApp = lazyRoot(loadSeedlinkApp, "SeedlinkApp");
        
        import { SmartfarmagentMenuButton } from '@sqwiro/agribusinessapps/smartfarmagent/SmartfarmagentMenuButton';
        const loadSmartfarmagentApp = () => Promise.resolve().then(() => require("@sqwiro/agribusinessapps/smartfarmagent/SmartfarmagentApp"));
        const SmartfarmagentApp = lazyRoot(loadSmartfarmagentApp, "SmartfarmagentApp");
        
        import { SmartfarmerMenuButton } from '@sqwiro/agribusinessapps/smartfarmer/SmartfarmerMenuButton';
        const loadSmartfarmerApp = () => Promise.resolve().then(() => require("@sqwiro/agribusinessapps/smartfarmer/SmartfarmerApp"));
        const SmartfarmerApp = lazyRoot(loadSmartfarmerApp, "SmartfarmerApp");
        
        import { SmartfarminspectorMenuButton } from '@sqwiro/agribusinessapps/smartfarminspector/SmartfarminspectorMenuButton';
        const loadSmartfarminspectorApp = () => Promise.resolve().then(() => require("@sqwiro/agribusinessapps/smartfarminspector/SmartfarminspectorApp"));
        const SmartfarminspectorApp = lazyRoot(loadSmartfarminspectorApp, "SmartfarminspectorApp");
        
        import { SaccomisMenuButton } from '@sqwiro/saccoapps/saccomis/SaccomisMenuButton';
        const loadSaccomisApp = () => Promise.resolve().then(() => require("@sqwiro/saccoapps/saccomis/SaccomisApp"));
        const SaccomisApp = lazyRoot(loadSaccomisApp, "SaccomisApp");
        
        import { SmartsaccowalletMenuButton } from '@sqwiro/saccoapps/smartsaccowallet/SmartsaccowalletMenuButton';
        const loadSmartsaccowalletApp = () => Promise.resolve().then(() => require("@sqwiro/saccoapps/smartsaccowallet/SmartsaccowalletApp"));
        const SmartsaccowalletApp = lazyRoot(loadSmartsaccowalletApp, "SmartsaccowalletApp");
        
        import { SmartvumaenterprisewalletMenuButton } from '@sqwiro/saccoapps/smartvumaenterprisewallet/SmartvumaenterprisewalletMenuButton';
        const loadSmartvumaenterprisewalletApp = () => Promise.resolve().then(() => require("@sqwiro/saccoapps/smartvumaenterprisewallet/SmartvumaenterprisewalletApp"));
        const SmartvumaenterprisewalletApp = lazyRoot(loadSmartvumaenterprisewalletApp, "SmartvumaenterprisewalletApp");
        
        import { CartifyMenuButton } from '@sqwiro/ecommerceapps/cartify/CartifyMenuButton';
        const loadCartifyApp = () => Promise.resolve().then(() => require("@sqwiro/ecommerceapps/cartify/CartifyApp"));
        const CartifyApp = lazyRoot(loadCartifyApp, "CartifyApp");
        
        import { SmartshoppingcartMenuButton } from '@sqwiro/ecommerceapps/smartshoppingcart/SmartshoppingcartMenuButton';
        const loadSmartshoppingcartApp = () => Promise.resolve().then(() => require("@sqwiro/ecommerceapps/smartshoppingcart/SmartshoppingcartApp"));
        const SmartshoppingcartApp = lazyRoot(loadSmartshoppingcartApp, "SmartshoppingcartApp");
        
        import { SmartsqwiropayMenuButton } from '@sqwiro/ecommerceapps/smartsqwiropay/SmartsqwiropayMenuButton';
        const loadSmartsqwiropayApp = () => Promise.resolve().then(() => require("@sqwiro/ecommerceapps/smartsqwiropay/SmartsqwiropayApp"));
        const SmartsqwiropayApp = lazyRoot(loadSmartsqwiropayApp, "SmartsqwiropayApp");
        
        import { FleetmanagerMenuButton } from '@sqwiro/transportapps/fleetmanager/FleetmanagerMenuButton';
        const loadFleetmanagerApp = () => Promise.resolve().then(() => require("@sqwiro/transportapps/fleetmanager/FleetmanagerApp"));
        const FleetmanagerApp = lazyRoot(loadFleetmanagerApp, "FleetmanagerApp");
        
        import { SmartdriverMenuButton } from '@sqwiro/transportapps/smartdriver/SmartdriverMenuButton';
        const loadSmartdriverApp = () => Promise.resolve().then(() => require("@sqwiro/transportapps/smartdriver/SmartdriverApp"));
        const SmartdriverApp = lazyRoot(loadSmartdriverApp, "SmartdriverApp");
        
        import { AgencyproMenuButton } from '@sqwiro/fintechapps/agencypro/AgencyproMenuButton';
        const loadAgencyproApp = () => Promise.resolve().then(() => require("@sqwiro/fintechapps/agencypro/AgencyproApp"));
        const AgencyproApp = lazyRoot(loadAgencyproApp, "AgencyproApp");
        
        import { EnterprisewalletMenuButton } from '@sqwiro/fintechapps/enterprisewallet/EnterprisewalletMenuButton';
        const loadEnterprisewalletApp = () => Promise.resolve().then(() => require("@sqwiro/fintechapps/enterprisewallet/EnterprisewalletApp"));
        const EnterprisewalletApp = lazyRoot(loadEnterprisewalletApp, "EnterprisewalletApp");
        
        import { SmartenterprisewalletMenuButton } from '@sqwiro/fintechapps/smartenterprisewallet/SmartenterprisewalletMenuButton';
        const loadSmartenterprisewalletApp = () => Promise.resolve().then(() => require("@sqwiro/fintechapps/smartenterprisewallet/SmartenterprisewalletApp"));
        const SmartenterprisewalletApp = lazyRoot(loadSmartenterprisewalletApp, "SmartenterprisewalletApp");
        
        import { PpcoreMenuButton } from '@sqwiro/fintechapps/ppcore/PpcoreMenuButton';
        const loadPpcoreApp = () => Promise.resolve().then(() => require("@sqwiro/fintechapps/ppcore/PpcoreApp"));
        const PpcoreApp = lazyRoot(loadPpcoreApp, "PpcoreApp");
        
        import { PpwalletMenuButton } from '@sqwiro/fintechapps/ppwallet/PpwalletMenuButton';
        const loadPpwalletApp = () => Promise.resolve().then(() => require("@sqwiro/fintechapps/ppwallet/PpwalletApp"));
        const PpwalletApp = lazyRoot(loadPpwalletApp, "PpwalletApp");
        
        import { SmartpesapurseMenuButton } from '@sqwiro/fintechapps/smartpesapurse/SmartpesapurseMenuButton';
        const loadSmartpesapurseApp = () => Promise.resolve().then(() => require("@sqwiro/fintechapps/smartpesapurse/SmartpesapurseApp"));
        const SmartpesapurseApp = lazyRoot(loadSmartpesapurseApp, "SmartpesapurseApp");
        
        import { FinanceMenuButton } from '@sqwiro/businessapps/finance/FinanceMenuButton';
        const loadFinanceApp = () => Promise.resolve().then(() => require("@sqwiro/businessapps/finance/FinanceApp"));
        const FinanceApp = lazyRoot(loadFinanceApp, "FinanceApp");
        
        import { MakercheckerMenuButton } from '@sqwiro/businessapps/makerchecker/MakercheckerMenuButton';
        const loadMakercheckerApp = () => Promise.resolve().then(() => require("@sqwiro/businessapps/makerchecker/MakercheckerApp"));
        const MakercheckerApp = lazyRoot(loadMakercheckerApp, "MakercheckerApp");
        
        import { MasterdataMenuButton } from '@sqwiro/businessapps/masterdata/MasterdataMenuButton';
        const loadMasterdataApp = () => Promise.resolve().then(() => require("@sqwiro/businessapps/masterdata/MasterdataApp"));
        const MasterdataApp = lazyRoot(loadMasterdataApp, "MasterdataApp");
        
        import { MediamanagerMenuButton } from '@sqwiro/businessapps/mediamanager/MediamanagerMenuButton';
        const loadMediamanagerApp = () => Promise.resolve().then(() => require("@sqwiro/businessapps/mediamanager/MediamanagerApp"));
        const MediamanagerApp = lazyRoot(loadMediamanagerApp, "MediamanagerApp");
        
        import { ProcurementMenuButton } from '@sqwiro/businessapps/procurement/ProcurementMenuButton';
        const loadProcurementApp = () => Promise.resolve().then(() => require("@sqwiro/businessapps/procurement/ProcurementApp"));
        const ProcurementApp = lazyRoot(loadProcurementApp, "ProcurementApp");
        
        import { RetailMenuButton } from '@sqwiro/businessapps/retail/RetailMenuButton';
        const loadRetailApp = () => Promise.resolve().then(() => require("@sqwiro/businessapps/retail/RetailApp"));
        const RetailApp = lazyRoot(loadRetailApp, "RetailApp");
        
        import { SalesMenuButton } from '@sqwiro/businessapps/sales/SalesMenuButton';
        const loadSalesApp = () => Promise.resolve().then(() => require("@sqwiro/businessapps/sales/SalesApp"));
        const SalesApp = lazyRoot(loadSalesApp, "SalesApp");
        
        import { SmartapproverMenuButton } from '@sqwiro/businessapps/smartapprover/SmartapproverMenuButton';
        const loadSmartapproverApp = () => Promise.resolve().then(() => require("@sqwiro/businessapps/smartapprover/SmartapproverApp"));
        const SmartapproverApp = lazyRoot(loadSmartapproverApp, "SmartapproverApp");
        
        import { SmartvendoraccountMenuButton } from '@sqwiro/businessapps/smartvendoraccount/SmartvendoraccountMenuButton';
        const loadSmartvendoraccountApp = () => Promise.resolve().then(() => require("@sqwiro/businessapps/smartvendoraccount/SmartvendoraccountApp"));
        const SmartvendoraccountApp = lazyRoot(loadSmartvendoraccountApp, "SmartvendoraccountApp");
        
        import { SystemMenuButton } from '@sqwiro/systemapps/system/SystemMenuButton';
        const loadSystemApp = () => Promise.resolve().then(() => require("@sqwiro/systemapps/system/SystemApp"));
        const SystemApp = lazyRoot(loadSystemApp, "SystemApp");
        
        import { SmartcustomerhelpMenuButton } from '@sqwiro/customercareapps/smartcustomerhelp/SmartcustomerhelpMenuButton';
        const loadSmartcustomerhelpApp = () => Promise.resolve().then(() => require("@sqwiro/customercareapps/smartcustomerhelp/SmartcustomerhelpApp"));
        const SmartcustomerhelpApp = lazyRoot(loadSmartcustomerhelpApp, "SmartcustomerhelpApp");
        
        import { SmartsqwirosupportMenuButton } from '@sqwiro/customercareapps/smartsqwirosupport/SmartsqwirosupportMenuButton';
        const loadSmartsqwirosupportApp = () => Promise.resolve().then(() => require("@sqwiro/customercareapps/smartsqwirosupport/SmartsqwirosupportApp"));
        const SmartsqwirosupportApp = lazyRoot(loadSmartsqwirosupportApp, "SmartsqwirosupportApp");
        
        import { SqwiropayMenuButton } from '@sqwiro/cloudhubapps/sqwiropay/SqwiropayMenuButton';
        const loadSqwiropayApp = () => Promise.resolve().then(() => require("@sqwiro/cloudhubapps/sqwiropay/SqwiropayApp"));
        const SqwiropayApp = lazyRoot(loadSqwiropayApp, "SqwiropayApp");
        
        import { HrMenuButton } from '@sqwiro/hrapps/hr/HrMenuButton';
        const loadHrApp = () => Promise.resolve().then(() => require("@sqwiro/hrapps/hr/HrApp"));
        const HrApp = lazyRoot(loadHrApp, "HrApp");
        
        import { SmartstaffMenuButton } from '@sqwiro/hrapps/smartstaff/SmartstaffMenuButton';
        const loadSmartstaffApp = () => Promise.resolve().then(() => require("@sqwiro/hrapps/smartstaff/SmartstaffApp"));
        const SmartstaffApp = lazyRoot(loadSmartstaffApp, "SmartstaffApp");
        



      function LoadingComponent() {
        return (
          <Stack grow align="center" justify="center">
            <ScreenLoading label="Loading..." />
          </Stack>
        );
      }

      function LoadingMenuButton() {
          return (
            <AppTile
              id={'smartapp'}
              title={''}
              style={{
                width: 150,
                height: 150,
              }}
              onPress={() => {}}
            />
          );
        }

      export const installedApps ={ "magneta_application/cs50": {
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
                loader={loadCs50App}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: Cs50MenuButton });
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
                loader={loadMpesaproApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: MpesaproMenuButton });
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
                loader={loadWebsiteApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: WebsiteMenuButton });
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
                loader={loadAvoproApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: AvoproMenuButton });
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
                loader={loadCstoreApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: CstoreMenuButton });
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
                loader={loadFarmbridgeApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: FarmbridgeMenuButton });
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
                loader={loadMacsproApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: MacsproMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/outsourcedavopro": {
          id: "outsourcedavopro",
          _ref: "magneta_application/outsourcedavopro",
          AppId: "outsourcedavopro",
          packageName: "@sqwiromobileagribusinessapps/outsourcedavopro",
          appRoot: "@sqwiro/agribusinessapps/outsourcedavopro",
          RootComponent: OutsourcedavoproApp,
          MenuButton: OutsourcedavoproMenuButton,
          groupId: "agribusinessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadOutsourcedavoproApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: OutsourcedavoproMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/outsourcedmacspro": {
          id: "outsourcedmacspro",
          _ref: "magneta_application/outsourcedmacspro",
          AppId: "outsourcedmacspro",
          packageName: "@sqwiromobileagribusinessapps/outsourcedmacspro",
          appRoot: "@sqwiro/agribusinessapps/outsourcedmacspro",
          RootComponent: OutsourcedmacsproApp,
          MenuButton: OutsourcedmacsproMenuButton,
          groupId: "agribusinessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadOutsourcedmacsproApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: OutsourcedmacsproMenuButton });
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
                loader={loadSeedlinkApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SeedlinkMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartfarmagent": {
          id: "smartfarmagent",
          _ref: "magneta_application/smartfarmagent",
          AppId: "smartfarmagent",
          packageName: "@sqwiromobileagribusinessapps/smartfarmagent",
          appRoot: "@sqwiro/agribusinessapps/smartfarmagent",
          RootComponent: SmartfarmagentApp,
          MenuButton: SmartfarmagentMenuButton,
          groupId: "agribusinessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartfarmagentApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartfarmagentMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartfarmer": {
          id: "smartfarmer",
          _ref: "magneta_application/smartfarmer",
          AppId: "smartfarmer",
          packageName: "@sqwiromobileagribusinessapps/smartfarmer",
          appRoot: "@sqwiro/agribusinessapps/smartfarmer",
          RootComponent: SmartfarmerApp,
          MenuButton: SmartfarmerMenuButton,
          groupId: "agribusinessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartfarmerApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartfarmerMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartfarminspector": {
          id: "smartfarminspector",
          _ref: "magneta_application/smartfarminspector",
          AppId: "smartfarminspector",
          packageName: "@sqwiromobileagribusinessapps/smartfarminspector",
          appRoot: "@sqwiro/agribusinessapps/smartfarminspector",
          RootComponent: SmartfarminspectorApp,
          MenuButton: SmartfarminspectorMenuButton,
          groupId: "agribusinessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartfarminspectorApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartfarminspectorMenuButton });
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
                loader={loadSaccomisApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SaccomisMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartsaccowallet": {
          id: "smartsaccowallet",
          _ref: "magneta_application/smartsaccowallet",
          AppId: "smartsaccowallet",
          packageName: "@sqwiromobilesaccoapps/smartsaccowallet",
          appRoot: "@sqwiro/saccoapps/smartsaccowallet",
          RootComponent: SmartsaccowalletApp,
          MenuButton: SmartsaccowalletMenuButton,
          groupId: "saccoapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartsaccowalletApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartsaccowalletMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartvumaenterprisewallet": {
          id: "smartvumaenterprisewallet",
          _ref: "magneta_application/smartvumaenterprisewallet",
          AppId: "smartvumaenterprisewallet",
          packageName: "@sqwiromobilesaccoapps/smartvumaenterprisewallet",
          appRoot: "@sqwiro/saccoapps/smartvumaenterprisewallet",
          RootComponent: SmartvumaenterprisewalletApp,
          MenuButton: SmartvumaenterprisewalletMenuButton,
          groupId: "saccoapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartvumaenterprisewalletApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartvumaenterprisewalletMenuButton });
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
          packageName: "@sqwiromobileecommerceapps/cartify",
          appRoot: "@sqwiro/ecommerceapps/cartify",
          RootComponent: CartifyApp,
          MenuButton: CartifyMenuButton,
          groupId: "ecommerceapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadCartifyApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: CartifyMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartshoppingcart": {
          id: "smartshoppingcart",
          _ref: "magneta_application/smartshoppingcart",
          AppId: "smartshoppingcart",
          packageName: "@sqwiromobileecommerceapps/smartshoppingcart",
          appRoot: "@sqwiro/ecommerceapps/smartshoppingcart",
          RootComponent: SmartshoppingcartApp,
          MenuButton: SmartshoppingcartMenuButton,
          groupId: "ecommerceapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartshoppingcartApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartshoppingcartMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartsqwiropay": {
          id: "smartsqwiropay",
          _ref: "magneta_application/smartsqwiropay",
          AppId: "smartsqwiropay",
          packageName: "@sqwiromobileecommerceapps/smartsqwiropay",
          appRoot: "@sqwiro/ecommerceapps/smartsqwiropay",
          RootComponent: SmartsqwiropayApp,
          MenuButton: SmartsqwiropayMenuButton,
          groupId: "ecommerceapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartsqwiropayApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartsqwiropayMenuButton });
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
          packageName: "@sqwiromobiletransportapps/fleetmanager",
          appRoot: "@sqwiro/transportapps/fleetmanager",
          RootComponent: FleetmanagerApp,
          MenuButton: FleetmanagerMenuButton,
          groupId: "transportapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadFleetmanagerApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: FleetmanagerMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartdriver": {
          id: "smartdriver",
          _ref: "magneta_application/smartdriver",
          AppId: "smartdriver",
          packageName: "@sqwiromobiletransportapps/smartdriver",
          appRoot: "@sqwiro/transportapps/smartdriver",
          RootComponent: SmartdriverApp,
          MenuButton: SmartdriverMenuButton,
          groupId: "transportapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartdriverApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartdriverMenuButton });
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
                loader={loadAgencyproApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: AgencyproMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/enterprisewallet": {
          id: "enterprisewallet",
          _ref: "magneta_application/enterprisewallet",
          AppId: "enterprisewallet",
          packageName: "@sqwiromobilefintechapps/enterprisewallet",
          appRoot: "@sqwiro/fintechapps/enterprisewallet",
          RootComponent: EnterprisewalletApp,
          MenuButton: EnterprisewalletMenuButton,
          groupId: "fintechapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadEnterprisewalletApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: EnterprisewalletMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartenterprisewallet": {
          id: "smartenterprisewallet",
          _ref: "magneta_application/smartenterprisewallet",
          AppId: "smartenterprisewallet",
          packageName: "@sqwiromobilefintechapps/smartenterprisewallet",
          appRoot: "@sqwiro/fintechapps/smartenterprisewallet",
          RootComponent: SmartenterprisewalletApp,
          MenuButton: SmartenterprisewalletMenuButton,
          groupId: "fintechapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartenterprisewalletApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartenterprisewalletMenuButton });
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
                loader={loadPpcoreApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: PpcoreMenuButton });
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
                loader={loadPpwalletApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: PpwalletMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartpesapurse": {
          id: "smartpesapurse",
          _ref: "magneta_application/smartpesapurse",
          AppId: "smartpesapurse",
          packageName: "@sqwiromobilefintechapps/smartpesapurse",
          appRoot: "@sqwiro/fintechapps/smartpesapurse",
          RootComponent: SmartpesapurseApp,
          MenuButton: SmartpesapurseMenuButton,
          groupId: "fintechapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartpesapurseApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartpesapurseMenuButton });
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
                loader={loadFinanceApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: FinanceMenuButton });
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
                loader={loadMakercheckerApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: MakercheckerMenuButton });
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
                loader={loadMasterdataApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: MasterdataMenuButton });
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
                loader={loadMediamanagerApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: MediamanagerMenuButton });
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
                loader={loadProcurementApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: ProcurementMenuButton });
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
                loader={loadRetailApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: RetailMenuButton });
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
                loader={loadSalesApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SalesMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartapprover": {
          id: "smartapprover",
          _ref: "magneta_application/smartapprover",
          AppId: "smartapprover",
          packageName: "@sqwiromobilebusinessapps/smartapprover",
          appRoot: "@sqwiro/businessapps/smartapprover",
          RootComponent: SmartapproverApp,
          MenuButton: SmartapproverMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartapproverApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartapproverMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartvendoraccount": {
          id: "smartvendoraccount",
          _ref: "magneta_application/smartvendoraccount",
          AppId: "smartvendoraccount",
          packageName: "@sqwiromobilebusinessapps/smartvendoraccount",
          appRoot: "@sqwiro/businessapps/smartvendoraccount",
          RootComponent: SmartvendoraccountApp,
          MenuButton: SmartvendoraccountMenuButton,
          groupId: "businessapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartvendoraccountApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartvendoraccountMenuButton });
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
          packageName: "@sqwiromobilesystemapps/system",
          appRoot: "@sqwiro/systemapps/system",
          RootComponent: SystemApp,
          MenuButton: SystemMenuButton,
          groupId: "systemapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSystemApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SystemMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartcustomerhelp": {
          id: "smartcustomerhelp",
          _ref: "magneta_application/smartcustomerhelp",
          AppId: "smartcustomerhelp",
          packageName: "@sqwiromobilecustomercareapps/smartcustomerhelp",
          appRoot: "@sqwiro/customercareapps/smartcustomerhelp",
          RootComponent: SmartcustomerhelpApp,
          MenuButton: SmartcustomerhelpMenuButton,
          groupId: "customercareapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartcustomerhelpApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartcustomerhelpMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartsqwirosupport": {
          id: "smartsqwirosupport",
          _ref: "magneta_application/smartsqwirosupport",
          AppId: "smartsqwirosupport",
          packageName: "@sqwiromobilecustomercareapps/smartsqwirosupport",
          appRoot: "@sqwiro/customercareapps/smartsqwirosupport",
          RootComponent: SmartsqwirosupportApp,
          MenuButton: SmartsqwirosupportMenuButton,
          groupId: "customercareapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartsqwirosupportApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartsqwirosupportMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/sqwiropay": {
          id: "sqwiropay",
          _ref: "magneta_application/sqwiropay",
          AppId: "sqwiropay",
          packageName: "@sqwiromobilecloudhubapps/sqwiropay",
          appRoot: "@sqwiro/cloudhubapps/sqwiropay",
          RootComponent: SqwiropayApp,
          MenuButton: SqwiropayMenuButton,
          groupId: "cloudhubapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSqwiropayApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SqwiropayMenuButton });
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
          packageName: "@sqwiromobilehrapps/hr",
          appRoot: "@sqwiro/hrapps/hr",
          RootComponent: HrApp,
          MenuButton: HrMenuButton,
          groupId: "hrapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadHrApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: HrMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        },
"magneta_application/smartstaff": {
          id: "smartstaff",
          _ref: "magneta_application/smartstaff",
          AppId: "smartstaff",
          packageName: "@sqwiromobilehrapps/smartstaff",
          appRoot: "@sqwiro/hrapps/smartstaff",
          RootComponent: SmartstaffApp,
          MenuButton: SmartstaffMenuButton,
          groupId: "hrapps",
          loadComponent: () => {
            return (
              <SafeLazy
                loader={loadSmartstaffApp}
                fallback={<LoadingComponent />}
                errorFallback={AppNotFound}
              />
            );
          },
          loadMenuButton: () => {
            return (
              <SafeLazy
                loader={() => {
                  return Promise.resolve({ default: SmartstaffMenuButton });
                }}
                fallback={<LoadingMenuButton />}
                errorFallback={<LoadingMenuButton />}
              />
            );
          },
        } }

      export default installedApps;
      