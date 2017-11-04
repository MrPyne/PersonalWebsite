import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
  indigoA700, indigoA400,
  grey900, grey600, deepPurple900,
  blueA700, blueA400, deepOrangeA200, deepOrangeA100, lightGreen400,
  lightGreen600,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

export default {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 60, // left-nav width = this * 4
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopLeftNavMenuItemHeight: 30,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: lightGreen400,
    primary2Color: lightGreen600,
    primary3Color: grey400,
    accent1Color: grey500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: lightGreen600,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
