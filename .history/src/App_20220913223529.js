import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return
  
  <>
  </>;
}

export default App;
