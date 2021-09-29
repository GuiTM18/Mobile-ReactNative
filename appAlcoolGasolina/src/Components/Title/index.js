import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Title() {
 return (
   <View>
       <Text style={styles.title}>
           Álcool ou gasolina
       </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    title: {
      color: '#11aaf1',
      fontSize: 40,
      margin: 20,
    },
  });