import React from "react";

const CoinItem = (props) => {
  return (
    <div className="coin-row">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
    <img src={props.coins.image} alt={coins.name} />
      </div>
    </div>
  );
};

export default CoinItem;
