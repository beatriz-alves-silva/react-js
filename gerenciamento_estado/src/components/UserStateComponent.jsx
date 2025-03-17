// import React from 'react'
import {useState} from 'react'
// useState = hooks (funcionalidade especial para algum fim específico -> gerenciar status)


// sempre que vamos alterar o valor de algo => useState
// se é somente leitura => var, state
const UserStateComponent = () => {
    // let count = 0;
    // variável de consulta e uma de alteração, inicio o hook
    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 1);
        setCount((prevCount) => prevCount + 1);
        console.log(count);
    };

    const [user, setUser] = useState({
        name: "Ana",
        age: 25,
        hobbier: ["leitura", "Programação"],
    });

    const updateUserAge = () => {
        setUser((prevUser) => (
            {
                ...prevUser,
                age: prevUser.age + 1,
            }
        ))
    }

    return (
        <div>
            <h2>Contador</h2>
            <p>Você clicou {count} vezes</p>
            <button onClick={increment}>Incrementar</button>

            <p>Nome: {user.name} e idade: {user.age}</p>
            <button onClick={updateUserAge}>Incrementar idade</button>
        </div>
    )
}

export default UserStateComponent