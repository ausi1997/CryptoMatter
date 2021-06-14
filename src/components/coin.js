import React from "react";

const Coin =({name,price,symbol,image,volume,priceChange,marketCap})=>{
    return(
        <div className="coin-container">
        <div className="coin-row">
        <div className="coin">
        <img src={image} alt='loading...'></img>
        <h1>{name}</h1>
        <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
        <p className="coin-price">Rs. {price.toLocaleString()}</p>
        <p className='coin-volume'><strong>Vol:</strong> {volume.toLocaleString()}</p>
        {
         priceChange<0 ?(
             <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
         ):
        ( <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
         ) }
         <p className='coin-marketcap'><strong>Mkt Cap:</strong> {marketCap.toLocaleString()}</p>
        </div>
        </div>
        </div>
    )
}

export default Coin;