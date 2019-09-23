import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Reports from "./view/reports/week/reports.js";
import Register from "./view/Register/register.js";
import index from "./view/Home/index.js";
import Navbar from "./view/Navbar/Navbar.js";
import report from "./view/reports/report"
import { BrowserRouter as Router, Route } from "react-router-dom";
function App(props) {
  console.log(props);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={index} />
        <Route path="/reports/report" component={report} />
        <Route path="/reports/week/:id" component={Reports} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
