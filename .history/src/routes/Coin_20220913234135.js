import axios from "axios";
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";

import "./";

const Coin = () => {
  const params = useParams()
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
   <div>{coin.id}</div>
  )
};

export default Coin;
