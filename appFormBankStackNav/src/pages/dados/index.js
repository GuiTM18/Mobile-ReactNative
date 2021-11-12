import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style'


export default function Dados( {route} ){

  const navigation = useNavigation();

  const {nome, idade, genero, escolaridade, nvlEscolaridade, conta, nacionalidade} = route.params

  function voltar(){
    
  }
  
  return(
    <View style={styles.areaResultado}>
        <Text style={styles.headerResultado}>Dados Informados:</Text>
        <Text style={styles.textResultado}>{this.state.exibirNome}</Text>
        <Text style={styles.textResultado}>{this.state.exibirIdade}</Text>
        <Text style={styles.textResultado}>{this.state.exibirGenero}</Text>
        <Text style={styles.textResultado}>{this.state.exibirEscolaridade}</Text>
        <Text style={styles.textResultado}>{this.state.exibirNvlEscolaridade}</Text>
        <Text style={styles.textResultado}>{this.state.exibirValor}</Text>
        <Text style={styles.textResultado}>{this.state.exibirStatus}</Text>
        <View style={styles.areaButton}>
        <Pressable
        style={styles.btnBack}
        onPress={ () => navigation.goBack()}>
          <Text style={styles.textBtn}>Voltar</Text>
        </Pressable>
      </View>
      </View>
  )
}