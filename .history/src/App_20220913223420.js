import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
   axios.get(url).then((response))
  }, [])

  return <></>;
}

export default App;
