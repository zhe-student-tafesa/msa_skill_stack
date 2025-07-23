import { Barlow_400Regular, Barlow_600SemiBold, Barlow_700Bold, useFonts } from '@expo-google-fonts/barlow';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts as useMonoFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// ✅ Prevent the splash screen from automatically hiding until fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [barlowLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_600SemiBold,
    Barlow_700Bold,
  });

    const [monoLoaded] = useMonoFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const fontsLoaded = barlowLoaded && monoLoaded;
  const colorScheme = useColorScheme();


    // ✅ Manually hide the startup screen after the font is loaded
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }

  if (!fontsLoaded) {
    return null; // Returns blank when loading
  }



  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
