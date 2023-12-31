import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  // 여러개의 toDo들을 받을 수 있는 array를 만들자!
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // state는 직접적으로 수정할 수 없다. 즉, push, toDO = "blabla" 같이 직접적인 수정은 불가하다.
    // array를 직접적으로 수정하지 않으면서 setToDos로 array에 element를 추가하는 방법
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add to do</button>
      </form>
    </div>
  );
}

export default App;
