// http://localhost:8081/test/test
import { SkillStackButton } from "@/components/SkillStackButton";
import { ThemedText } from "@/components/ThemedText";
import { Palette } from "@/constants/Palette";
import { db } from '@/firebase/firebaseConfig';
import addTestData from "@/firebase/write";
import { increment, incrementByAmount } from "@/store/counterReducer";
import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Test = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

    useEffect(() => {
    console.log('Firebase Firestore:', db);
  }, []);


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
        text={"Write to database"}
        backgroundColor={Palette.skillStackBtnLightBlue}
        fontColor={Palette.skillStackButtonPrimary}
        onPress={() => {
          console.log("SkillStack Business Button clicked");
          addTestData();
        }}
      />
      <ThemedText>Count: {count}</ThemedText>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="+ 5" onPress={() => dispatch(incrementByAmount(5))} />
      <Text>Firebase Config Test</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
