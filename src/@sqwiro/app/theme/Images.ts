// leave off @2x/@3x
import Images from '@expocraft/core/lib/theme/Images';

import sample from 'lodash/sample';
import logoicon from '@sqwiro/app/assets/images/logoicon.png';
import darklogoicon from '@sqwiro/app/assets/images/darklogoicon.png';
import whitelogoicon from '@sqwiro/app/assets/images/whitelogoicon.png';

import jvuma from '@sqwiro/app/assets/images/apps/jvuma.png';
import jsacco from '@sqwiro/app/assets/images/apps/jsacco.png';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Home Screen Images
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import homescreen1 from '@sqwiro/app/assets/images/home/homescreen1.jpg';
import Splash from '@sqwiro/app/assets/images/splash.png';
import blankSplash from '@sqwiro/app/assets/images/splashblank.jpg';

import LicensePlaceholder from '@sqwiro/app/assets/images/examples/license.png';
import placeholder from '@sqwiro/app/assets/images/placeholder.webp';

const backgroundscreens = [homescreen1];

const images = {
  logo: logoicon,
  logoicon: logoicon,
  darklogoicon: darklogoicon,
  whitelogoicon: whitelogoicon,
  Background: sample(backgroundscreens),

  jsacco,
  jvuma,

  placeholder,

  // App images
  ...Images,

  // Examples & Placeholders

  LicensePlaceholder,

  Splash,
  blankSplash,

  // icons
};

export default images;
