import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import Result from './Result/'
import styles from '../Form/styles'

export default function Form() {

    const [alcool, setAlcool] = useState(null)
    const [gasolina, setGasolina] = useState(null)
    const [valor, setValor] = useState(null)
    const [use, setUse] = useState(null)
    

    function Calcular() {
        return setValor(
             (alcool / gasolina).toFixed(2)  
        )
        
    }
    function Calcule() {
        return setUse(
            valor <= 0.70 ? 'Alcool' : 'Gasolina'
        )
        
    }

    function Validar() {
        if (gasolina != null && alcool != null) {
            Calcular()
            Calcule()
            setGasolina(null)
            setAlcool(null)
            return
        }
          
    }    
    
    return (
        <View style={styles.position} >
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setAlcool}
                    value={alcool}
                    placeholder="Preço da alcool"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setGasolina}
                    value={gasolina}
                    placeholder="Preço da gasolina"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={Validar}
                    
                    title="calcular"
                />
            </View>
            <Text>
                <Result  message={valor} combus={use}/>
            </Text>
              
        </View>
    );
}