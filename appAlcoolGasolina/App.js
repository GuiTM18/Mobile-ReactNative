import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Form from './src/Components/Form';
import Title from './src/Components/Title';

let img = 'http://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Title style={styles.title}/>
      <Image source={{ uri: img }} style={{ width: 300, height: 155, margin: 10}} />
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
