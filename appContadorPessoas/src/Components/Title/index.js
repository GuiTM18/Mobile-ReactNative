import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Title() {
    return (
        <View>
            <Text style={styles.title}>
                Contador de Pessoas
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#11aabb',
        fontSize: 40,
    }
});