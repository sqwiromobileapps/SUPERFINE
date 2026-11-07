import Constants from 'expo-constants';
import { appStore } from '@cloudhub-ux/zstore';
const { getState } = appStore;

const config = require('./config.json');

export const appconstants = {
  appotaversion: '1.0.2',
  DeviceName: Constants.deviceName,
};

// const ServerIp = '172.20.10.2';
// const ServerIp = '172.20.10.3';
// const ServerIp = '192.168.100.144';
// const ServerIp = '192.168.0.108';

const ServerIp = config.ipAddress;

// const ServerIp = '192.168.0.104';

// const ServerIp = '192.168.8.200';

const serverPort = __DEV__ ? 1377 : '';

// const ServerDomain = __DEV__ ? `localsqwiro.com` : `sqwiro.com`;

const getConfig = () => {
  const MerchantCode = 'superfine';

  // const DOMAIN_API_ENDPOINT = __DEV__
  //   ? `http://${merchantcode}.${ServerDomain}${
  //       serverPort ? `:${serverPort}` : ''
  //     }/api`
  //   : `https://${MerchantCode}.${ServerDomain}${
  //       serverPort ? `:${serverPort}` : ''
  //     }/api`;

  const CONFIG = {
    AppName: 'SQWIRO',
    AppCode: 'sqwiro',
    VersionCode: 21,
    ServerIp,
    AppType: 'CUSTOM',
    GooglePlayId: 'com.superfineafrica.cloud', // this is important because it determines if the app has Organization select screen
    // MOB-257 (F-2121): this app is an APK on the SQWIRO App Store, not on Google Play: the store prompts name it and
    // open it. No public page per app yet (F-2122), so the store's home.
    AndroidStore: { Name: 'SQWIRO App Store', Url: 'https://appstore.sqwiro.com/' },
    // MOB-222: the platform country. A phone number with no country code reads in it (baseui PhoneInput), never a
    // country written in code.
    CountryCode: 'KE',
    AppStoreId: 'superfine/id1564813296',
    MerchantCode,
    merchant_code: `sqwiro-${MerchantCode}`,
    ...appconstants,
    API_ENDPOINT: __DEV__
      ? `http://${ServerIp}:${serverPort}/api`
      : `https://${MerchantCode}.sqwiro.com/api`,
  };

  return CONFIG;
};

export default getConfig;
