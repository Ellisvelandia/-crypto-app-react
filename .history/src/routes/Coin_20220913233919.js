import axios from "axios";
import React, { useState, useEffect } from "react";

import "./Coin.css";

const Coin = () => {
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios.get(url).then((res) => {
        setCoin(res.data)
    }).catch((error) => {
        console.log(error)
    })
}, [])

  return(
   <div>{coin}</div>
  )
};

export default Coin;
