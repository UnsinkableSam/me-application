import React from "react";
import "../../App.css";
import "./Navbar.css";

function Navbar() {
  return (
    <div id="Navbar">
      <ul>
        <li id="1" className="nav-link">
          <a href="/">Index</a>
        </li>
        <li id="2" className="nav-link"></li>
        <li>
          {" "}
          <div class="dropdown">
            <a class="dropbtn">Reports</a>
            <div class="dropdown-content">
              <a href="/reports/week/1">Report 1</a>
              <a href="/reports/week/2">Report 2</a>
            </div>
          </div>{" "}
        </li>
        <li id="2" className="nav-link">
          <a href="/Register/register">Register</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
