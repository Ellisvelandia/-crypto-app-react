import React from 'react'

const CoinItem = (props) => {
  return (
    <div className="coin-row">
      <p>{props.coins}</p>
    </div>
  )
}

export default CoinItem