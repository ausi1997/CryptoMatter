import React from "react";

const Coin =()=>{
    return(
        <div className="coin-container">
        <div className="coin-row">
        <div className="coin">
        <img src={} alt='loading...'></img>
        <h1>{}</h1>
        <p className="coin-symbol">{}</p>
        </div>
        <div className="coin-data">
        <p className="coin-price">{}</p>
        <p className='coin-volume'>{}</p>
        </div>
        </div>
        </div>
    )
}

export default Coin;