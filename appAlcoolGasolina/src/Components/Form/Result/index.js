import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Result(props) {
 return (

   <View>
       <Text style={styles.res}>
          Resultado: {props.message}
       </Text>
   </View>
   
  );
}

const styles = StyleSheet.create({
  res: {
    fontSize: 40,
    color: '#11AFFF',
    
  },
  resu: {
    fontSize: 30,
    color: '#11AFFF',
    
  },
})