/**
 * RN 0.74+ compatibility shims. React Native removed the classic
 * `removeEventListener` from BackHandler/AppState/Linking/Dimensions (addEventListener
 * now returns a subscription with `.remove()`). Legacy libs (e.g. react-native-modal@13)
 * still call `removeEventListener` in componentWillUnmount → "undefined is not a function".
 * This restores those methods on top of the new subscription model. No-op on older RN
 * where the methods still exist. Loaded first in index.js (SDK-56 apps only).
 */
import {
  BackHandler,
  AppState,
  Linking,
  Dimensions,
  Keyboard,
} from 'react-native';

function patch(obj, addName, removeName) {
  if (!obj || typeof obj[addName] !== 'function') return;
  if (typeof obj[removeName] === 'function') return; // still present (older RN)
  const subs = new Map();
  const origAdd = obj[addName].bind(obj);
  obj[addName] = (type, handler, ...rest) => {
    const sub = origAdd(type, handler, ...rest);
    if (handler) {
      const arr = subs.get(handler) || [];
      arr.push(sub);
      subs.set(handler, arr);
    }
    return sub;
  };
  obj[removeName] = (type, handler) => {
    const arr = subs.get(handler);
    if (arr && arr.length) {
      const sub = arr.pop();
      if (sub && typeof sub.remove === 'function') sub.remove();
      if (!arr.length) subs.delete(handler);
    }
  };
}

patch(BackHandler, 'addEventListener', 'removeEventListener');
patch(AppState, 'addEventListener', 'removeEventListener');
patch(Linking, 'addEventListener', 'removeEventListener');
patch(Dimensions, 'addEventListener', 'removeEventListener');
patch(Keyboard, 'addListener', 'removeListener');

/**
 * @react-navigation/drawer v6 defaults `useLegacyImplementation = !Reanimated.isConfigured?.()`.
 * Reanimated 4 removed `isConfigured`, so the default flips to `true` and DrawerView throws
 * ("useLegacyImplementation is not available with Reanimated 3"). Restore it (force truthy) so
 * the modern drawer implementation is selected. Covers every Drawer.Navigator at once.
 */
try {
  const RN_Reanimated = require('react-native-reanimated');
  const targets = [RN_Reanimated, RN_Reanimated && RN_Reanimated.default];
  for (const t of targets) {
    if (t) {
      try {
        t.isConfigured = () => true;
      } catch (e) {}
    }
  }
} catch (e) {}
