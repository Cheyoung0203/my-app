import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

/** Clean up function
 * Component가 파괴될때는 return값을 실행한다.
 * hiFn을 실행한 후 해당 컴포넌트가 파괴될 때 return 값인 byFn을 실행한다.
 *
 * 결과적으로... 요약
 * 우리는 `useEffect`함수를 사용하여 코드를 선택적으로 실행할 수 있다.
 * 1. 처음에 실행하고 다시는 실행하지 않는 방법
 * 2. dependency에 의존하여 선택적으로 코드를 실행하는 방법
 * 3. component가 파괴될 때 return 값을 실행하여 코드를 실행하는 방법 (Clean up function)
 */
