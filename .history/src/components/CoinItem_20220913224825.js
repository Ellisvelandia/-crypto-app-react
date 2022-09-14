import React from 'react'

const CoinItem = (props) => {
  return (
    <div className="coin-row">
      <p>{props.coins.market}</p>
    </div>
  )
}

export default CoinItem