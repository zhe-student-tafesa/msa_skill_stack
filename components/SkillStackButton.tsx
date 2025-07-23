import { Palette } from "@/constants/Palette";
import React from "react";
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

// TYPE
type SkillStackButtonProps = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string; // Optional, default skillStackButtonPrimary
  fontColor?: string; // Optional, default is white
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export const SkillStackButton = ({
  text,
  onPress,
  backgroundColor = Palette.skillStackButtonPrimary, // Optional, default skillStackButtonPrimary
  fontColor = Palette.white, // Optional, default is white
  style,
  textStyle,
}: SkillStackButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.button, { backgroundColor }, style]}
    >
      <Text style={[styles.text, { color: fontColor }, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 66,
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "Barlow_500Medium", // 👈 Note that the font name should be consistent with that when loading
  },
});
