import { useEffect, useState } from "react";
import "./App.css";
import Job from "./Jobs";
import datas from "./data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  /*const getData=()=>{
    fetch(datas)
      .then((resp) => {
        setJobs(resp.json());
      })
      .catch((error) => console.log(error));
  };
  */
  /*
  useEffect(() => {
    getData();
  }, []);
*/
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredJobs = datas.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Job Positions</h1>
      <div className="search-container">
        <form action="#">
          <input
            type="text"
            id="search"
            placeholder="Search Jobs"
            onChange={handleChange}
          />
          <input type="button" value="Search" id="button" />
        </form>
      </div>
      {filteredJobs.map((job) => {
        return (
          <Job
            title={job.title}
            condition1={job.condition1}
            condition2={job.condition2}
            skills1={job.skills1}
            skills2={job.skills2}
            skills3={job.skills3}
            skills4={job.skills4}
          />
        );
      })}
      ;
    </div>
  );
}

export default App;

/*useEffect(() => {
    axios
      .get(
        "data.json"
      )
      .then((resp) => {
        setCoins(resp.data);
      })
      .catch((error) => console.log(error));
  }, []);*/
/*<div className="coin-app">
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
      ;
    </div>*/
