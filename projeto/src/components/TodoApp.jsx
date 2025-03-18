import { useState, useEffect, useRef } from 'react';
import "./TodoApp.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // ref para controlar a primeira renderização
  const isFirstRender = useRef(true);

  // carregar tarefas do localStorage quando o componente montar
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    if (savedTodos && Array.isArray(savedTodos)) {
      setTodos(savedTodos);
    }
  }, []);

  // salvar tarefas no localStorage quando `todos` mudar (exceto na primeira vez)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='app-container'>
      <h1 className='title'>Lista de Tarefas</h1>

      <form onSubmit={handleSubmit} className='form-container'>
        <input
          type="text"
          className='input-field'
          placeholder='Adicione uma tarefa...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit' className='add-button'>Adicionar</button>
      </form>

      {todos.length === 0 && <p className='empty'>Não há tarefas.</p>}

      <ul className='todo-list'>
        {todos.map((todo) => (
          <li key={todo.id} className='todo-item'>
            {todo.text}
            <button
              className='delete-button'
              onClick={() => handleDelete(todo.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
