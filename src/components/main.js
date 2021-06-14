import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./coin";
const uri = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false';


const Main = ()=>{

    const [coins, setCoins] = useState([]);
    const [search,setSearch] = useState('');

  useEffect(()=>{
    axios.get(uri)
    .then(res=>{
     setCoins(res.data);
     console.log(res.data);
    })
    .catch(error=>{
      console.log(error);
    })
  },[]);

  const Search = (e)=>{
      setSearch(e.target.value)
  }
const SearchCoins = coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
);
    return(
        <div className="coin-app">
        <div className ="coin-search">
        <h1 className="coin-head">Search a currency</h1>
        <form>
        <input
         type="text"
         placeholder="Search"
         className="coin-input"
         onChange={Search}
        ></input>
        </form>
        </div>
        {
            SearchCoins.map(item=>{
                return(
                    <Coin key={item.id} 
                     name={item.name}
                     image={item.image}
                     symbol={item.symbol}
                     marketCap={item.market_cap}
                     price={item.current_price}
                     priceChange={item.price_change_percentage_24h}
                     volume={item.total_volume}
                    ></Coin>
                )
            })
        }
        </div>
    )
}

export default Main;