import React, { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./ResultImc/"

export default function Form() {

    const [peso, setPeso] = useState(null)
    const [altura, setAltura] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState("Calcular")

    function imcCalcular() {
        return setImc(
            (peso / (altura * altura)).toFixed(2))

    }

    function validarImc() {
        if (peso != null && altura != null) {
            imcCalcular()
            setPeso(null)
            setAltura(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular novamente")
        setMessageImc("Preencha peso e altura")

    }

    return (
        <View>
            <View>
                <Text>
                    Altura
                </Text>
                <TextInput
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"

                />
                <Text>
                    Peso
                </Text>
                <TextInput
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex: 65.200"
                    keyboardType="numeric"
                />
                <Button
                    onPress={() => validarImc()}
                    title={TextButton}
                />
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc} />
        </View>

    )
}