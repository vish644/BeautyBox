import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="">
        <h4>Logo</h4>
      </div>

      <div className="searchBox">
        <input type="text" placeholder="Search for product" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div>
        <button className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
      <div className="hamberger">
      <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
