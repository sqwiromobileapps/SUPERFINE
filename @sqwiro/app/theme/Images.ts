// leave off @2x/@3x
import Images from '@expocraft/core/lib/theme/Images';

import sample from 'lodash/sample';
import logoicon from '@sqwiro/app/assets/images/logoicon.png';
import darklogoicon from '@sqwiro/app/assets/images/darklogoicon.png';
import whitelogoicon from '@sqwiro/app/assets/images/whitelogoicon.png';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Home Screen Images
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import homescreen1 from '@sqwiro/app/assets/images/home/homescreen1.png';
import homescreen2 from '@sqwiro/app/assets/images/home/homescreen2.png';
import homescreen3 from '@sqwiro/app/assets/images/home/homescreen3.png';
import homescreen4 from '@sqwiro/app/assets/images/home/homescreen4.png';
import homescreen5 from '@sqwiro/app/assets/images/home/homescreen5.png';

import Splash from '@sqwiro/app/assets/images/splash.png';
import blankSplash from '@sqwiro/app/assets/images/splashblank.jpg';

import LicensePlaceholder from '@sqwiro/app/assets/images/examples/license.png';
import placeholder from '@sqwiro/app/assets/images/placeholder.webp';

const backgroundscreens = [
  homescreen1,
  homescreen2,
  homescreen3,
  homescreen4,
  homescreen5,
];

const images = {
  logo: logoicon,
  logoicon: logoicon,
  darklogoicon: darklogoicon,
  whitelogoicon: whitelogoicon,
  Background: sample(backgroundscreens),

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
