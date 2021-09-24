import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import Resultado from './Result';
import styles from './styles'

export default function Form() {

    const [contador, setContador] = useState(0)

    function Adicionar() {
        setContador(contador + 1)
    }

    function Remover() {
        setContador(contador - 1)

        if (contador < 1)
            setContador(contador + 1)
    }

    return (
        <View style={styles.center}>

            <View style={styles.div}>
                <Text>
                    <Resultado Resultado={contador} />
                </Text>
            </View>

            <TouchableOpacity style={styles.more} onPress={Adicionar}>
                <Text style={styles.textb}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.less} onPress={Remover} title="-">
                <Text style={styles.textb}>-</Text>
            </TouchableOpacity>

        </View>
    );
}

