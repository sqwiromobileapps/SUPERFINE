import SmartapproverApp from '@sqwiro/userapps/smartapprover/SmartapproverApp';
import SmartdriverApp from '@sqwiro/userapps/smartdriver/SmartdriverApp';
import SmartfarmerApp from '@sqwiro/userapps/smartfarmer/SmartfarmerApp';
import SmartpesapurseApp from '@sqwiro/userapps/smartpesapurse/SmartpesapurseApp';
import SmartstaffApp from '@sqwiro/userapps/smartstaff/SmartstaffApp';
import SmartvendoraccountApp from '@sqwiro/userapps/smartvendoraccount/SmartvendoraccountApp';

export default function getUserApps() {
  return [
    {
      name: 'smartpesapurseApp',
      component: SmartpesapurseApp,
    },
    {
      name: 'smartstaffApp',
      component: SmartstaffApp,
    },
    {
      name: 'smartfarmerApp',
      component: SmartfarmerApp,
    },
    {
      name: 'smartvendoraccountApp',
      component: SmartvendoraccountApp,
    },
    {
      name: 'smartdriverApp',
      component: SmartdriverApp,
    },
    {
      name: 'smartapproverApp',
      component: SmartapproverApp,
    },
  ];
}
