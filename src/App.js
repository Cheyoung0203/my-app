import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // 처음 시작할 때 한번만 실행되는 코드
  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 6) {
      console.log("I run when 'keyword' changes", keyword);
    }
  }, [keyword]);

  useEffect(() => {
    if (counter !== 0) {
      console.log("I run when 'counter' changes.");
    }
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

/** 언제 코드가 실행될지 결정하는 방법을 배워보자
 * keyword가 변하는 즉, onChange event가 발생할 때만 search console을 re-rendering하는 방법은 무엇일까?
 * 특정 이벤트(부분)만 발생했을 때 원하는 코드들을 실행시키는 방법은 무엇일까?
 *
 * 만약, 변수 keyword가 변화할 때 코드를 실행하고 싶다면, 2nd 배열 자리에 keyword를 적어준다.
 *
 * 처음 시작할 때 아무것도 search하지 않았음에도 keyword를 검색했으므로 조건을 추가하자
 * 1. keyword가 ""일 때를 제외하고 검색한다.
 * 2. keyword가 6글자 이상일 때 검색한다.
 *
 * 즉, 2nd argument가 지켜보는 keyword만이 변화할 때 코드를 실행한다.
 */
