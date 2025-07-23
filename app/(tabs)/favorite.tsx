import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, View } from 'react-native';

export default function TabThreeFavoriteScreen() {
  return (
    <View style={styles.mainContainer}>
      <ThemedText type="title">Favorite!</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
