import React from "react";

const CoinItem = (props) => {
  return (
    <div className="coin-row">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol}</p>
      </div>
      <p>{props.coins.current_price}</p>
      <p>{props.coins.current_change_percentage_24h}</p>
      <p className="hide-mobile">{props.coins.tot}</p>
      <p className="hide-mobile">{props.coins.current_price}</p>
    </div>
  );
};

export default CoinItem;
