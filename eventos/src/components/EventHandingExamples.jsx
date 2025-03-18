import {useState} from 'react'

const EventHandingExamples = () => {
    const handleClick = () => {
        alert("Olá de novo")
    };

    const handleGreet = (name) => {
        alert(`Olá ${name}`);
    };

    const [name, setName] = useState("");
    
    // argumento especial "e", não dispara o evento de recarregar a página
    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Enviado! ${name}`);
    };

    return (
        <div>
            {/* () => função anônima para não disparar automaticamente */}
            <button onClick={() => alert("Olá")}>Clique aqui</button>
            <button onClick={handleClick}>Clique aqui também</button>
            <br />
            <button onClick={() => handleGreet("Ana")}>Dizer olá Ana</button>
            <button onClick={() => handleGreet("Pedro")}>Dizer olá Pedro</button>
            <br />
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Digite seu nome...'/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}
export default EventHandingExamples