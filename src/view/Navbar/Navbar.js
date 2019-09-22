import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../../App.css";
import "./Navbar.css";
import Popup from "reactjs-popup";
import Login from "../login/login.js"
import axios from 'axios';
function Navbar() {
  const [responseName, setresponseName] = React.useState("");
  const reggi = <Link to={"/Register/register/"} >Register</Link>;
  const loggi = <Popup trigger={<a > Login</a>} position="bottom center">
    {Login}
  </Popup>;

  const createLink = <Link to={"/reports/report"} >Create/edit reports</Link>;
  useEffect(() => {
    axios.get('https://me-api.sam-corp.me/reports/')
      .then((response) => {
        let textnames = [];
        console.log(response.data[0].filename);
        response.data.forEach(element => {
          textnames.push(<Link to={"/reports/week/reports/" + element.filename}>{element.filename}</Link>
          // <a value={element.filename}>{element.filename}</a>
          );
        });
        setresponseName(textnames);

      }, (error) => {
        console.log(error);
      });
  }, []);
  return (
    <div id="Navbar">
      <ul>
        <li id="1" className="nav-link">
          <Link to={"/"}>Index</Link>
        </li>
        <li id="2" className="nav-link"></li>
        <li>
          {" "}
          <div className="dropdown">
             {/* eslint-disable-next-line  */}
            <a  className="dropbtn">Reports</a>
            <div className="dropdown-content">
              
              
              {/* <Link to={"/reports/week/1"}>Report 1</Link>
              <Link to={"/reports/week/2"}>Report 2</Link> */}
              {/* <Link to={{ path:"/reports/week/reports", state: { "page": "hello"}}}  >Report 3</Link> */}
              {/* <Link to={"/reports/week/reports/lol"}>Report 3</Link> */}
              {responseName}
            </div>
          </div>{" "}
        </li>
        <li id="2" className="nav-link">
          {/* <Link to={"/Register/register/"} >Register</Link> */}
          {localStorage.getItem("token") === null ? reggi : null }
        </li>
        <li id="2" className="nav-link">
          
          {localStorage.getItem("token") === null ? loggi : null}
        </li>
        <li id="2" className="nav-link">

          {localStorage.getItem("token") === null ? null : createLink}
        </li>
        
      </ul>
      
    </div>
  );
}

export default Navbar;
