import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(1);
  const onChange = (event) => setMoney(event.target.value);
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
      {loading ? <strong>Loading...</strong> : <strong>Loaded..</strong>}
      <input
        onChange={onChange}
        value={money}
        type="number"
        placeholder="how many do you have money"
      />
      <ul>
        {coins.map((coin) => (
          <li key={coin.key}>
            {coin.name}({coin.symbol}) : {money / coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
