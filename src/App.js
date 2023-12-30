import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

/**
 * state를 변경할 때 모든 code들은 항상 다시 실행된다.
 *
 * 하지만 component 내부의 몇몇 코드는 처음 rendering될 때만 코드가 실행되길 원할 수 있다.
 * example
 * API를 통해 데이터를 가져올 때
 */
