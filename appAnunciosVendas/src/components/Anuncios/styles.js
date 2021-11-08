import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    areaHeader:{
      backgroundColor: '#1f1f1f',
      width: '100%',
      height: '20%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textHeader:{
      fontSize: 50,
      color: '#fff',
      fontWeight: 'bold',
    },
    area:{
      backgroundColor: '#1f1f1f',
      width: 175,
      height: 260,
      marginTop: 50,
      marginLeft: 7,
      marginRight: 7,
      alignItems: 'center',
      borderRadius: 10,
    },
    textoJogo:{
      color: '#15a',
      fontSize: 25,
      fontWeight: 'bold',
    },
    textoPreco:{
      fontSize: 40,
      color: '#fff',
      fontWeight: 'bold',
    },
    imgAnuncio:{
      width: 140,
      height: 190,
    },
  })
  
export default styles