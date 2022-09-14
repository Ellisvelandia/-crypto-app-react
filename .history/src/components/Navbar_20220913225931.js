import React from 'react'
import "./Navbar.css"
import {FaCoins} from "react-icons/fa"

const Navbar = () => {
  return (
    <div className='navbar'>
    <FaCoins className='icon'/>
    <h1>Coin <span></span> </h1>
      </div>
  )
}

export default Navbar