import Colors from './Colors';
import Sizes from './Sizes';

const Fonts = ({
  fontFamily = 'clanpro',
  fontFamilyThin = 'clanpro-thin',
  fontFamilyBook = 'clanpro-book',
  fontFamilyBold = 'clanpro-bold',

  colors = Colors,
  sizes = Sizes,
}: {
  fontFamily?: string;
  fontFamilyThin?: string;
  fontFamilyBook?: string;
  fontFamilyBold?: string;
  colors?: typeof Colors;
  sizes?: typeof Sizes;
}) => ({
  h1: {
    fontFamily: fontFamilyBook,
    fontSize: sizes.h1,
    lineHeight: sizes.h1 * 1.2,
  },
  h2: {
    fontFamily: fontFamilyBook,
    fontSize: sizes.h2,
    lineHeight: sizes.h2 * 1.2,
  },
  h3: {
    fontFamily: fontFamilyBook,
    fontSize: sizes.h3,
    lineHeight: sizes.h3 * 1.2,
  },
  h4: {
    fontFamily: fontFamilyBook,
    fontSize: sizes.h4,
    lineHeight: sizes.h4 * 1.2,
  },
  h5: {
    fontFamily: fontFamilyBook,
    fontSize: sizes.h5,
    lineHeight: sizes.h5 * 1.2,
  },
  h6: {
    fontFamily: fontFamilyBook,
    fontSize: sizes.h6,
    lineHeight: sizes.h6 * 1.2,
  },

  header: {
    fontFamily: fontFamilyBold,
    fontSize: sizes.header,
    lineHeight: sizes.header * 1.2,

    letterSpacing: 0.5,
    // color: colors.black,
  },
  subHeader: {
    fontFamily: fontFamily,
    fontSize: sizes.subHeader,
    lineHeight: sizes.subHeader * 1.2,

    letterSpacing: 0.5,
    // color: colors.black,
  },

  title: {
    fontFamily: fontFamilyBook,
    fontSize: sizes.title,
    lineHeight: sizes.title * 1.2,

    letterSpacing: 0.5,
    // color: colors.black,
  },

  subTitle: {
    fontFamily: fontFamily,
    fontSize: sizes.subTitle,
    lineHeight: sizes.subTitle * 1.2,

    letterSpacing: 0.5,
    // color: colors.black,
  },

  semibold: {
    fontFamily: fontFamilyBold,
    fontWeight: '100',
  },

  bold: {
    fontFamily: fontFamilyBold,
  },

  light: {
    fontFamily: fontFamily,
  },

  normal: {
    fontFamily: fontFamilyBook,
  },

  default: {
    fontFamily: fontFamilyBook,
    fontSize: sizes.body,
    lineHeight: sizes.body * 1.2,
    fontWeight: '400',
  },

  body: {
    // lineHeig,
  },

  caption: {
    fontSize: sizes.caption,
    lineHeight: sizes.caption * 1.2,
  },

  small: {
    fontSize: sizes.small,
    lineHeight: sizes.small * 1.2,
  },
  button: {
    fontSize: sizes.button,
    lineHeight: sizes.button * 1.2,

    // color: colors.white,
  },
});

export default Fonts;
