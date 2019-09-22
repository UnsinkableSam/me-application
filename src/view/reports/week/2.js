import React from "react";

//import logo from "../../../logo.svg";
import "../../../App.css";
import One from "./1.js";

function Two(props) {
  console.log(props);
  return <div>{One(false)};</div>;
}

export default Two;
