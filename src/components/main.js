import React, { useEffect, useState } from "react";
import axios from "axios";
const uri = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false';


const Main = ()=>{

    const [coins, setCoins] = useState([]);

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

    return(
        <div className="coin-app">
        <div className ="coin-search">
        <h1 className="coin-head">Search a currency</h1>
        </div>
        </div>
    )
}

export default Main;