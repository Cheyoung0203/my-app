import { useState } from "react";

function App() {
  const [toDo, setToDO] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDO(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArr) => [...currentArr, toDo]);
    setToDO("");
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do. .."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * state는 직접적으로 수정할 수 없다+
 => toDos.push (불가 X)
 * 따라서 setState 함수를 활용해서 state값을 수정해야 한다.
 * [arr1, ...arr2] === arr1 + arr2
 */

export default App;
