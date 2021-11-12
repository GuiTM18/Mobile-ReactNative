import React, { useState } from 'react';
import { View, TextInput, Text, Button, Switch, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style'

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function Home (){

  const navigation = useNavigation();

  const [inputNome, setInputNome] = useState('');

  const [inputIdade, setInputIdade] = useState('');

  const generos = [
    {desc: '--SELECIONE UMA OPÇÃO--'},
    {desc: 'Feminino'},
    {desc: 'Masculino'},
    {desc: 'Outros'},
  ]

  let generoItem = generos.map( (v, k) => {
    return <Picker.Item key={k} value={k} label={v.desc} />
  })

  const [pickerGenero, setPickerGenero] = useState(0)

  const escolaridades = [
    {desc:'--SELECIONE UMA OPÇÃO--'},
    {desc: 'Fundamental'},
    {desc: 'Médio'},
    {desc: 'Graduação'},
    {desc: 'Pós-Graduação'},
    {desc: 'Mestrado/Doutorado'}
  ]

  let escolaridadeItem = escolaridades.map ( (v,k) => {
    return <Picker.Item key={k} value={k} label={v.desc} />
  })

  const [pickerEscolaridade, setPickerEscolaridade] = useState(0)

  const niveisEscolaridade = [
    {desc: '--SELECIONE UMA OPÇÃO--'},
    {desc: 'Concluido'},
    {desc: 'Cursando'},
    {desc: 'Incompleto'}
  ]

  let nvlEscolaridadeItem = niveisEscolaridade.map( (v,k) => {
    return <Picker.Item key={k} value={k} label={v.desc} />
  })

  const [pickerNvlEscolaridade, setPickerNvlEscolaridade] = useState(0)
 

  const [sliderValue, setSliderValue] = useState(0)

  const [nacionalSwitch, setNacionalSwitch] = useState(true)
  
  function irDados(){
    if ( (inputNome === '') || (inputIdade === '')) {
      alert('Prencha os campos')
    } else if((pickerEscolaridade === 0) || (pickerGenero === 0) || (pickerNvlEscolaridade === 0)) {
      alert('Selecione uma opção!')
    } else {
      navigation.navigate('Sobre', {nome: inputNome, idade: inputIdade, 
        genero: generos[pickerGenero].desc, escolaridade: escolaridades[pickerEscolaridade].desc,
      nvlEscolaridade: niveisEscolaridade[pickerNvlEscolaridade].desc, 
      conta: sliderValue.toFixed(2), nacionalidade: nacionalSwitch, 
      nacionalidade: (nacionalSwitch) ? 'Brasileiro' : 'Estrangeiro'})
    }
  }
  
  return(
    <View style={styles.container}>

    <View style={styles.headerArea}>
      <StatusBar style="auto" />
      <Text style={styles.textHeader}>Abertura de Conta</Text>
    </View>
    <ScrollView>

      <View style={styles.form}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize='words'
          placeholderTextColor={'#888'}
          placeholder={'Digite seu nome aqui'}
          onChangeText={(texto) => this.setState({ nome: texto })} />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholderTextColor={'#888'}
          placeholder={'Digite sua idade aqui'}
          onChangeText={(texto) => this.setState({ idade: texto })} />
      </View>

      <View style={styles.pickerArea}>
        <Picker
          style={styles.picker}
          selectedValue={this.state.genero}
          onValueChange={(itemValue, itemIndex) => this.setState({ genero: itemValue })}
        >
          {generosItem}
        </Picker>

        <Picker
          style={styles.picker}
          selectedValue={this.state.escolaridade}
          onValueChange={(itemValue, itemIndex) => this.setState({ escolaridade: itemValue })}
        >
          {tpEscolaridadeItem}
        </Picker>

      </View>

      <View style={styles.slider}>
        <Text style={styles.sliderLabel}>Limite da Conta</Text>
        <Slider
          style={styles.sliderSpace}
          minimumValue={0}
          maximumValue={1080}
          minimumTrackTintColor='#ffbf00'
          maximumTrackTintColor='#f7d999'
          thumbTintColor='#333'
          step={10}
          onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
          value={this.state.valor}
        />

        <Text style={styles.sliderText}>R$ {this.state.valor.toFixed(2)}</Text>
      </View>

      <View style={styles.switchArea}>

        <Text style={{ textAlign: 'center', fontSize: 25 }}>
          {(this.state.status) ? "Brasileiro" : "Estrangeiro"}
        </Text>

        <Switch
          trackColor={{ false: "#ffbf99", true: "#ffbf99" }}
          thumbColor={(this.state.status) ? "#7ad999" : "#11aabb"}
          value={this.state.status}
          onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}
        />
        
      </View>

      <View style={styles.areaBotao}>
        <Pressable 
        onPress={irDados}
        style={styles.botao}>
          <Text style={styles.textBotao}>Confirmar</Text>
        </Pressable>
      </View>
    </ScrollView>
  </View>
  )
}