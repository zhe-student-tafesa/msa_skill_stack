// http://localhost:8081/test/test
import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Test = () => {
  return (
    <View>
      {/* title demo */}
      <ThemedText type="title">Welcome!</ThemedText>
      {/* body text demo */}
      <ThemedText type="default">Welcome!</ThemedText>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})