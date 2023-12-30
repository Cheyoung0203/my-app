import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  // 처음 시작할 때 한번만 실행되는 코드
  useEffect(() => {
    console.log("Call the API");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

/** useEffect
 * 두 개의 argument를 가지는 function
 * 1st argument: 처음에 딱 한번만 실행되고 그 이후로는 절대 실행되지 않는 코드
 * 2nd argument: magic(나중에....) - 첫 번째 방법으로인해 발생하는 문제를 보고 살펴보도록 하자
 */
