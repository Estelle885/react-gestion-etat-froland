import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, name: "Créer l'état" },
    { id: 1, name: 'Afficher les todos' },
  ]);

  const [text, setText] = useState('');

  const handleSubmit = function (e) {
    e.preventDefault();
    const newId = crypto.randomUUID();
    const tDo = [...todos, { id: newId, name: text }];
    setTodos(tDo);
    setText("");
  };

  const handleChange = function (e) {
    const val = e.target.value;
    setText(val);
  };

  return (
    <>
      <Hello />
      <ul>
        {todos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.id}</span>
            <span>{toDo.name}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="entrer une valeur"
          onChange={handleChange}
          value={text}
        />
        <button type="submit">Ajouter</button>
      </form>
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

export default App;
