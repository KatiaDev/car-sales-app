import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <div>
        <h1 className="store-header">Car Sales</h1>
      </div>
      <div>
        <NavLink to="/">Shop Cars</NavLink>
        <NavLink to="/sell-your-car">Sell your car</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
