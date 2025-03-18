import {useState, useEffect} from 'react'

const UseEffectExamples = () => {
    //sem dependências
    useEffect(() => {
        console.log("Rodou UE1")
    })

    // com dependências vazias / array dependencias vazio
    // bom uso: chamar API
    useEffect(() => {
        console.log("Rodou UE2")
    }, [])

    // useState ativa a re-renderização
    const [count, setCount] = useState(0);

        // com dependências
        useEffect(() => {
            console.log("Rodou E3")
        }, [count])    

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
        </div>
    )
}

export default UseEffectExamples