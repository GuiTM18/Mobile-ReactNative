import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/header/header'
import Conversor from './src/components/converter/converter';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Conversor />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});