import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState();
  const [toDos, setToDos] = useState([]);
  const onChangeToDo = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    console.log(toDos);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeToDo}
          value={toDo}
          type="text"
          placeholder="Write To do"
        />
        <button>Add to Button</button>
      </form>
      <hr />
      <ul>
        {toDos.map((current, index) => (
          <li key={index}>{current}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
