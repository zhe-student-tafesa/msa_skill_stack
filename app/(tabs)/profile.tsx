import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';


export default function TabFourProfileScreen() {
  return (
    <View style={styles.mainContainer}>
      <ThemedText type="title">Profile!</ThemedText>
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
