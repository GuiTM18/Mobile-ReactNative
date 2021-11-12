import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  textHeader: {
    fontSize: 37,
    color: '#222',
    fontWeight: 'bold',
    marginTop: 35,

  },
  headerArea: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '15%',
    backgroundColor: '#ff9110'
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 17,
  },
  label: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#111'
  },
  input: {
    borderBottomWidth: 1,
    width: 250,
    fontSize: 20,
  },
  picker: {
    margin: 15,
    padding: 15,
  },
  pickerArea: {
    flexDirection: 'column',
    marginTop: 15,
  },
  slider: {
    margin: 25,
    flexDirection: 'column',
  },
  sliderText: {
    textAlign: 'center',
    fontSize: 20,
    position: 'relative',
    left: 115,
    color: '#ff9110'
  },
  sliderSpace: {
    marginTop: 25
  },
  sliderLabel: {
    fontSize: 20,
    textTransform: 'uppercase'
  },
  switchArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  areaBotao: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  botao: {
    backgroundColor: '#ff9110',
    width: 200,
    height: 50,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textBotao: {
    fontSize: 25,
    color: '#222',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});


export { styles }