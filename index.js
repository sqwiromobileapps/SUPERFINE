import './rn-compat-shims';
import 'react-native-gesture-handler';
// @expocraft/baseui (M1): NativeWind's stylesheet. Without it every className is a no-op and BaseuiProvider's
// flex-1 roots collapse to zero height (a blank app).
import './global.css';

import { Text, TextInput } from 'react-native';
import { registerRootComponent } from 'expo';
import { holdSplashScreen } from '@expocraft/baseui';
import './globalFunctions';

import App from './src/@sqwiro/appcore/App';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

// The native splash stays up until BaseuiProvider has registered the fonts (D-81); PreloadAssets no longer hides it.
holdSplashScreen();

// import "./app/DismissWarnings";
registerRootComponent(App);
