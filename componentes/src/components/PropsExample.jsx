// usar o "rafce" para criar o componente -> a extensão que faz isso
// props é uma comunicação de dados do componente pai para o componente filho
import React from 'react'

// forma padrão
//const PropsExample = (props) => {


const PropsExample = ({nome, idade}) => {
    return (
        <div>
            <h3>Olá {nome}</h3>
            <h3>Minha idade é {idade} anos</h3>
        </div>
    )
}

export default PropsExample