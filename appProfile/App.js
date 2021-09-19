import React, { Component } from 'react';
import { View, Text, Image, _Text} from 'react-native';
 
class App extends Component{
  render(){

    let img = 'https://avatars.githubusercontent.com/u/79342387?v=4';
 
    return(
      <View>
        <Image source={{ uri: img }} style={{ width: 300, height: 300, margin: 50}} />

        <Text style={{ fontSize: 40, textAlign: 'center', color: '#15dbbb' }}>informações pessoais</Text>
 
        <Text style={{ fontSize: 30, margin:10, color: 'darkblue' }}>-Dados pessoais</Text>
        <Text>    Nome: Guilherme Gonçalves da Silva </Text>
        <Text>    Idade: 18</Text>
        <Text>    Email: gui.goncalves.sp18@gmail.com</Text>
        <Text>    Telefone: 13 997064755</Text>

        <Text style={{ fontSize: 30, margin:10, color: 'darkblue' }}>-Formação</Text>
        <Text>    Cursando Análise de sistemas na UNIP </Text>

        <Text style={{ fontSize: 30, margin:10, color: 'darkblue' }}>-Experiência</Text>
        <Text>    Atendimento ao cliente </Text>

        <Text style={{ fontSize: 30, margin:10, color: 'darkblue' }}>-Projetos</Text>
        <Text>    App: Contador de pessoas na loja </Text>
        <Text>    App: Multiplicador de números</Text>
        <Text>    App: Alcool ou gasolina</Text>
        <Text>    App: Cálculo IMC</Text>
      </View>
    )
  }
}
 
export default App;
