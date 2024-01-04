import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [dollar, setDollar] = useState(0);
  const [coins, setCoins] = useState([]);
  const onChange = (event) => {
    setDollar(event.target.value);
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
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <form>
        <input
          onChange={onChange}
          type="number"
          placeholder="write your dollars"
        />
      </form>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): $
              {dollar / Math.round(coin.quotes.USD.price)} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
