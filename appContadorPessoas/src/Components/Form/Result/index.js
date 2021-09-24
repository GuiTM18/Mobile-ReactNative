
import React from "react"
import { View, Text } from "react-native"
import styles from '../styles'

export default function Resultado(props) {
    return (

        <View>
            <Text style={styles.num}>
                {props.Resultado}
            </Text>
        </View>
    )
}