import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, name: "Créer l'état" },
    { id: 1, name: 'Afficher les todos' },
  ]);

  const handleRemove = (oneElement) => {
    const updatedList = todos.filter((element) => element.id !== oneElement.id);
    setTodos(updatedList);
  };

  const handleAdd = (newText) => {
    const newId = crypto.randomUUID();
    const tDo = [...todos, { id: newId, name: newText }];
    setTodos(tDo);
  };

  return (
    <>
      <Hello />
      <List todos={todos} handleRemove={handleRemove} />
      <AddTodoForm onAdd={handleAdd} />
    </>
  );
}

function Hello() {
  return (
    <div>
      <h1>Hello PROJWEB2 student!</h1>
    </div>
  );
}

function List({ todos, handleRemove }) {
  return (
    <ul>
      {todos.map((toDo) => (
        <li key={toDo.id}>
          <span>{toDo.id}</span>
          <span>{toDo.name}</span>
          <button onClick={() => handleRemove(toDo)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleChange = function (e) {
    const val = e.target.value;
    setText(val);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="entrer une valeur"
        onChange={handleChange}
        value={text}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default App;
