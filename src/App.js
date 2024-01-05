import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0);
  const onChange = (event) => {
    setDollars(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={dollars}
          type="number"
          placeholder="write your money"
        />
        <button>submit dollars</button>
      </form>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin, idx) => (
          <option key={idx}>
            {coin.name} ({coin.symbol}:{" "}
            {dollars / Math.floor(coin.quotes.USD.price)} USD)
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;

/**
 * API 가져오기
 * https://api.coinpaprika.com/v1/tickers
 * fetch와 then에 대하여 공부하기
 * json() 공부
 *
 * challenge => 입력한 USD값을 each coin 단위로 변환해서 display
 */
