/// 1. Supports automatic switching of dark/light themes

/// 2. Supports text style type abbreviations (title/subtitle/link/...)

/// 3. Supports user-defined colors and styles

/// 4. Based on the Text native component, retains all native functions

// Name         fontWeight Value  Description
// Thin         100               Extra thin
// ExtraLight   200               Extra thin
// Light        300               Thin
// Normal / Regular 400           Normal (default)
// Medium       500               Slightly thicker
// SemiBold     600               Between normal and bold
// Bold         700               Bold
// ExtraBold    800               Even thicker
// Black        900               Extra thick

// TextProps: All legal props types received by Text are used to allow us to inherit these properties when customizing components.
import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

// Define component props type ThemedTextProps, inherit TextProps, and extend some custom properties
export type ThemedTextProps = TextProps & {
  lightColor?: string; // // Optional: Specify the font color for light mode
  darkColor?: string;
  // The type field allows you to quickly use styles such as titles and links without having to write fontSize, fontWeight, etc.
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link'; // Built-in text style type
};


// Create the ThemedText function component
export function ThemedText({
  style, // Additional styles passed in by the user
  lightColor, // Custom light theme color
  darkColor,
  type = 'default', // Default text style type is 'default'
  ...rest  // Other TextProps, such as children, onPress, etc.
}: ThemedTextProps) {
  /// Get the final color to be used, give priority to the color passed in by props, otherwise fallback to the 'text' field in the default theme color
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text'); // 'text' is the name of the field in the default color scheme (the text you defined in Colors.ts)
 
  return (
    <Text
      style={[
        { color },   // Set text color based on current theme

        //  Add the corresponding style according to the type attribute.
        // Only one will be selected (the one that meets the condition), and the others are undefined (no effect).
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest} // Pass all other TextProps, such as children, numberOfLines, etc.
    />
  );
}

// Define styles for various text style types
const styles = StyleSheet.create({
  // default: Done
  default: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Barlow_400Regular',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    // color: '#ffffff', working
    fontSize: 34,
    fontWeight: '600', // SemiBold
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
