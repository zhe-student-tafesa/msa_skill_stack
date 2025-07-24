// http://localhost:8081/test/test
import { SkillStackButton } from "@/components/SkillStackButton";
import { ThemedText } from "@/components/ThemedText";
import { Palette } from "@/constants/Palette";
import { increment, incrementByAmount } from "@/store/counterReducer";
import { RootState } from "@/store/store";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Test = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
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
        backgroundColor={Palette.skillStackBtnLightBlue}
        fontColor={Palette.skillStackButtonPrimary}
        onPress={() => {
          console.log("SkillStack Business Button clicked");
        }}
      />
      <ThemedText>Count: {count}</ThemedText>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="+ 5" onPress={() => dispatch(incrementByAmount(5))} />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
