import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Setup from './canvas/setup'
import Starbucks from './canvas/starbucks'

export default function App() {
  return (
    <View style={styles.container}>
      <Starbucks />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
