import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/Portfolios" activeStyle={activeStyle}>
        Portfolios
      </NavLink>
      {" | "}
      <NavLink to="/History" activeStyle={activeStyle}>
        History
      </NavLink>
      {" | "}
      <NavLink to="/Reports" activeStyle={activeStyle}>
        Reports
      </NavLink>
      {" | "}
      <NavLink to="/Optimizer" activeStyle={activeStyle}>
        Optimizer
      </NavLink>
    </nav>
  );
}
export default Header;
