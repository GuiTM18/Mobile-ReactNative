import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';


import styles from './src/components/Anuncios/styles'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anuncios: [
        { id: 1, nome: 'Fortnite', preco: 150.90, tipo: 'Jogo', source: require('./assets/fortnite.jpg') },
        { id: 2, nome: 'The last of us II', preco: 250.90, tipo: 'Jogo', source: require('./assets/thelast.jpg') },
        { id: 3, nome: 'Spider-man', preco: 150.90, tipo: 'Jogo', source: require('./assets/spider.jpg') },
        { id: 4, nome: 'The Witcher', preco: 150.90, tipo: 'Jogo', source: require('./assets/witcher.jpg') },
        { id: 5, nome: 'RedDead 2', preco: 250.90, tipo: 'Jogo', source: require('./assets/reddead.jpg') },
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.areaHeader}>
          <Text style={styles.textHeader}>ANÚNCIOS</Text>
          <Text style={styles.textoJogo}>JOGOS PARA PS4</Text>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={this.state.anuncios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Anuncio data={item} />}
        />
      </View>
    )
  }
}

class Anuncio extends Component {
  render() {
    return (
      <View style={styles.area}>
        <Image style={styles.imgAnuncio} source={this.props.data.source} />
        <Text style={styles.textoJogo}>{this.props.data.nome}</Text>
        <Text style={styles.textoPreco}>{this.props.data.preco.toFixed(2)}</Text>
      </View>
    )
  }
}

export default App;