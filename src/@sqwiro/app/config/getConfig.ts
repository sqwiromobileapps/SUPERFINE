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
