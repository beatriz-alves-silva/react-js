import React from 'react'

const JsxExamples = () => {

    const userName = "João";
    const user = {
        name: "Ana",
        lastName: "Souza",
    }

    function getGreeting(name){
        return `Olá ${name}`;
    }

    const userIsLoggedIn = false;

    const userRole = "admin";

    const users = [
        {id: 1, name:"João"},
        {id: 2, name:"Maria"},
        {id: 3, name:"Felipe"}
    ]

    return (
        <div>
            {/* BÁSICO */}
            <h2>Conteúdo que o usuário vai ver</h2>
            <p>O nome do usuário é: {userName}</p>
            <p>Usuário: {user.name} {user.lastName}</p>
            <p>{2 + 2}</p>
            <p>{getGreeting(userName)}</p>
            <p>{getGreeting("Maria")}</p>

            {/* DIFERANÇAS DO HTML */}
            <div className="teste">ok</div>
            <button onClick={() => alert("Teste")}>Clique em mim</button>
            <input type="text" placeholder='Digite algo...' />

            {/* RENDERIZAÇÃO CONDICIONAL */}
            {userIsLoggedIn ? <p>Caso 1: Está loggado</p>  :  <p>Caso 2: Não está loggado</p>}
            {userRole === "admin" && "Você é um admin"}
        
            {/* RENDERIZAÇÃO DE LISTAS */}
            <div>
                <ul>
                    {users.map((user) => 
                    <li key={user.id}>
                        {user.id} | {user.name}
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default JsxExamples