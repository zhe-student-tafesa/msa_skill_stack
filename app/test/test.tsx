// http://localhost:8081/test/test
import { SkillStackButton } from "@/components/SkillStackButton";
import { ThemedText } from "@/components/ThemedText";
import { Palette } from "@/constants/Palette";
import React from "react";
import { StyleSheet, View } from "react-native";

const Test = () => {
  return (
    <View>
      {/* title demo */}
      <ThemedText type="title">Welcome!</ThemedText>
      {/* body text demo */}
      <ThemedText type="default">Welcome!</ThemedText>
      <SkillStackButton
        text={"Sign in"}
        onPress={() => {
          console.log("SkillStackButton clicked");
        }}
      />

      <SkillStackButton
        text={"Sign in with Business Account"}
        backgroundColor= {Palette.skillStackBtnLightBlue}
        fontColor= {Palette.skillStackButtonPrimary}
        onPress={() => {
          console.log("SkillStack Business Button clicked");
        }}
      />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
