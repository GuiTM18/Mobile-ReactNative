import React from "react"
import {View, Text} from "react-native"

export default function Resultado(props){
    return(

        <View>
            <Text>
                {props.message}
                {props.Resultado}
            </Text>
        </View>
    )
}
