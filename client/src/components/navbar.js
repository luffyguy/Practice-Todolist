import React from "react";
import { Link } from "react-router-dom";
import "./all.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>Note-App</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/note">Notes</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
