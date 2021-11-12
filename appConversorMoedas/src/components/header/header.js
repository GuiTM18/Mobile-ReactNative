import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {styles} from '../header/styles'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.titulo}>CONVERSOR DE MOEDAS</Text>
                <Text style={styles.subTitulo}>DÓLAR, REAL E EURO</Text>
            </View>
        )
    }
}