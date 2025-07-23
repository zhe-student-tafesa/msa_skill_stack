/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
import { Palette } from './Palette';



export const Colors = {
  light: {
    text: Palette.skillStackTextPrimary,
    background: Palette.skillStackBgWhite,
    tint: Palette.tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: Palette.tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: Palette.tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: Palette.tintColorDark,
  },
};
