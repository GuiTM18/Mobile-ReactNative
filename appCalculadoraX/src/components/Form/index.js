import React, { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import Resultado from "./Resultado/"
import Texto from "./Texto/"

export default function Form() {

    const [num1, setnum1] = useState(null)
    const [num2, setnum2] = useState(null)
    const [x, setX] = useState(null)
    const [TextButton, setTextButton] = useState("Calcular")

    function Calcular() {
        return setX(
            num1 * num2)

    }

    function validar() {
        if (num1 != null && num2 != null) {
            Calcular()
            setnum1(null)
            setnum2(null)
            setTextButton("Calcular novamente")
            return
        }
        setX(null)
        setTextButton("Calcular novamente")
        

    }

    return (
        <View>
            <View>
                <TextInput
                    onChangeText={setnum1}
                    value={num1}
                    placeholder="Digite o primeiro n°"
                    keyboardType="numeric"

                />
                <TextInput
                    onChangeText={setnum2}
                    value={num2}
                    placeholder="Digite o segundo n°"
                    keyboardType="numeric"
                />
                <Button
                    onPress={() => validar()}
                    title={TextButton}
                />
            </View>
            <Text>Resultado</Text><Resultado Resultado={x} />
        </View>

    )
}