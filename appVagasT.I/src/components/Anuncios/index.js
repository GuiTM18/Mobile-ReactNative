import React, {Component} from 'react'
import { View, FlatList } from 'react-native'

import Vagas from '../Vagas/index'

export default class Anuncios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vagas:[
                {
                    id: 1, vaga: 'Estágio: Front-end', salario: 1100.00,
                    dsVaga: 'desenvolver sites web, Requisitos: conhecimento basico em html e css, gostar de aprender. ',
                    contato: '(13) 99709-7622 | E-mail: estagiosti@gmail.com'
                },
                {
                    id: 2, vaga: 'Desenvolvedor FullStack', salario: 3500.00,
                    dsVaga: 'Desevolvimento de software para empresas, necessário experiência na área',
                    contato: 'Tel.: (11) 3325-1456 | E-mail: arsenelupin@company.com'
                },
                {
                    id: 3, vaga: 'Desenvolvedor Back-end', salario: 4200.90,
                    dsVaga: 'Back-end em nodeJS e postgress para empresas de software',
                    contato: 'Tel.: (13) 99101-2321 | E-mail.: brsofts@outlook.com'
                },
                {
                    id: 4, vaga: 'Estágio: Web Design', salario: 800.00,
                    dsVaga: "Pojetar telas e estilos com figma",
                    contato: 'Tel.: (17) 98911-0010 | E-mail: estagiosti@gmail.com'
                },
                {
                    id: 5, vaga: 'Desenvolvedor Mobile Senior', salario: 6800.00,
                    dsVaga: 'cirar apps  variados para empresas',
                    contato: 'Tel.: (15) 3312-9771 | E-mail: markcible@company.com'
                }
            ]
        }

    }

    render() {
        return (
            <View>
                <FlatList
                data={this.state.vagas}
                vertical={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item})=> <Vagas data={item} />}
                />
            </View>
        )
    }
}