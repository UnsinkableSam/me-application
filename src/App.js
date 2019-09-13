import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import One from "./view/reports/week/1.js";
import Register from "./view/Register/register.js";
import index from "./view/Home/index.js";
import Navbar from "./view/Navbar/Navbar.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={index} />
        <Route path="/reports/week/1" component={One} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
