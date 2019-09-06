import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import "./Navbar.css";

function Navbar() {
  return (
    <div id="Navbar">
      <ul>
        <li id="1" className="nav-link">
          <a href="/">Index</a>
        </li>
        <li id="2" className="nav-link">
          <a href="/reports/week/1">Reports</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
