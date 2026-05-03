import axios from 'axios';
import { appStore } from '@cloudhub-ux/zstore';
import getConfig, { appconstants } from '@sqwiro/app/config/getConfig';

const { getState } = appStore;

// const logger = createLogger({ diff: true, collapsed: true });
// const storage = createSecureStore();

// const ip = '172.20.10.3';

export const axiosinstance = () => {
  const { token, currentUser } = getState().authContext;

  if (token) {
    return axios.create({
      baseURL: getConfig().API_ENDPOINT,
      headers: {
        'x-proxies': 1,
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        authorization: `Bearer ${token}`,
        userid: currentUser.id,
        username: currentUser.Name,
        phone: currentUser.Phone,
        pushtoken: currentUser.PushToken,
        ...appconstants,
      },
    });
  }
  return axios.create({
    baseURL: getConfig().API_ENDPOINT,
    headers: {
      'x-proxies': 1,
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      userid: currentUser.id,
      username: currentUser.Name,
      Phone: currentUser.Phone,
      rating: currentUser.Rating || 4,
    },
  });
};
