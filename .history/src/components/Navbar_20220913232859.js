import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";

const Navbar = () => {
  return (
    <Link>
    <div className="navbar">
      <FaCoins className="icon" />
      <h1>
        Coin <span className="purple">Search</span>
      </h1>
    </div>
    </Link>

  );
};

export default Navbar;
