import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View } from "react-native";

export default function TabTwoSearchScreen() {
  return (
    <View style={styles.mainContainer}>
      <ThemedText type="title">Search!</ThemedText>
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
