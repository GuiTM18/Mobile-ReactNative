import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    area:{
        flex: 1,
        alignItems: 'center',
    },
    areaHeader:{
        backgroundColor: '#ffa111',
        width: '100%',
        height: '15%',
        borderBottomColor: '#1f1f1f',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textChallenge:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#111',
        textAlign: 'center',
        padding: 16,
    },
    textHeader:{
        fontSize: 29,
        marginTop: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: 3,
        color: '#111'
    },
    areaRandom:{
        marginTop: 20 ,
        backgroundColor: "#ff9111",
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#1f1f1f',
        marginBottom: 20,
        
    },
    textRandom:{
        fontSize: 150,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1f1f1f',
        marginTop: -8
    },
    button:{
        width: 120,
        height: 50,
        marginTop: 20,
        backgroundColor: '#ffa500',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        
    },
    
})

export {styles}