import React, {Component} from "react";
import { styles } from './styles';
import {View, Text, Pressable, Image} from 'react-native';

let img = 'https://blog.barbaderespeito.com.br/wp-content/uploads/2018/07/cartoleiro-com-certeza-ja%CC%81-ficou-sabendo-que-o-Cartola-FC-2018-tem-algumas-novidades-certo-Aqui-vamos-dar-algumas-dicas-para-voce%CC%82-usar-essas-mudanc%CC%A7as-para-ganhar-pontos-no-Cartola.jpg'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      numRandom: 0
    }
  
      this.rodar = this.rodar.bind(this)
  }

  rodar(){
    var NR = Math.floor(Math.random() * 10) + 1
    this.setState({numRandom: NR})
  }
  
  render(){
    return (

      <View style={styles.area}>

        <View style={styles.areaHeader}>
          <Text style={styles.textHeader}>Jogo dos N° Aleatórios</Text>
        </View>
        
        <Image source={{ uri: img }} style={{ width: 155, height: 155, margin: 10}} />
        <Text style={styles.textChallenge}>Pense em um N° de 0 a 10</Text>

        <View style={styles.areaRandom}>
          <Text style={styles.textRandom}>{this.state.numRandom}</Text>
        </View>

        <Pressable onPress={this.rodar} style={styles.button}>
          <Text style={{fontSize: 25, textAlign: 'center', letterSpacing: 5, color: '#111', textTransform: 'uppercase', fontWeight: 'bold'}}>Rodar</Text>
        </Pressable>

      </View>
    )
  }

}

export default App;
