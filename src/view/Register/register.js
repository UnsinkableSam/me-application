import React from "react";

import "./register.css";
import "../datepicker/dates.js";
// import Dates from "../datepicker/dates.js";
import DatesPicker from "../datepicker/datepicker.js";
import axios from 'axios';
import { Redirect } from 'react-router'
function Register() {
  const [isYear, setIsYear] = React.useState(2019);
  const [isMonth, setIsMonth] = React.useState(0);
  const [isDay, setIsDay] = React.useState(0);
  const [isStage, setIsStage] = React.useState(1);
  const [isDisplayedYear, setisDisplayedYear] = React.useState(false);
  const [isDisplayedMonth, setisDisplayedMonth] = React.useState(true);
  const [isDisplayedDay, setisDisplayedDay] = React.useState(false);
  // eslint-disable-next-line 
  const [email, setEmail] = React.useState("");
  // eslint-disable-next-line 
  const [name, setName] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [ConfirmPassword, setConfirmPassword] = React.useState("");
  const [EmailValidate, setEmailValidate] = React.useState(true);
  const [NameValidate, setNameValidate] = React.useState(true);
  const [PasswordValidate, setPasswordValidate] = React.useState(true);
  const [ErrorPassword, setErrorPassword] = React.useState(false);
  // const [ErrorEmail, setErrorEmail] = React.useState(false);
  const Days = DatesPicker(isYear, isMonth);
  const [redirect, setRedirect] = React.useState(false);
  const [PassConfirmError, setPassConfirmError] = React.useState(true);
  const re = RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const reName = RegExp(/^[a-zA-Z ]+$/);
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const registerApi = (e) => {
    console.log("lol");
    
   axios.post('http://localhost:8333/register/', {
        username: email, 
        password: Password,
        name: name,
        birth: isYear + "/" + isMonth + "/" + isDay
    })
      .then((response) => {
        console.log(response);
        setRedirect(true);
      }, (error) => {
        console.log(error);
      });

  }

  // eslint-disable-next-line 
  function checkEmail(email) {
    if (email.match(re)) {
      setEmailValidate(true);
    } else {
      setEmailValidate(false);
    }
  }
// eslint-disable-next-line 
  function checkName(name) {
    if (name.match(reName)) {
      setNameValidate(true);
    } else {
      setNameValidate(false);
    }
  }
// eslint-disable-next-line 
  function checkPassword(Password) {
    if (Password.length > 7) {
      setPasswordValidate(true);
    } else {
      setErrorPassword(true);
      setPasswordValidate(false);
    }
  }
// eslint-disable-next-line 
  function CheckconfirmPassword() {
    if (Password === ConfirmPassword) {
      setPassConfirmError(false);
    }
  }
  function years() {
    let allyears = [];
    if (isStage === 1) {
      for (let index = 0; index < 100; index++) {
        allyears.push(
          <div
            className="date"
            key={index}
            onClick={() => {
              setIsYear(isYear - index);
              setIsStage(2);
              setisDisplayedYear(true);
              setisDisplayedMonth(false);
              setisDisplayedDay(false);
            }}
          >
            <p>{2019 - index}</p>
          </div>
        );
      }
      return allyears;
    }
  }
  function StageDay() {
    if (isStage === 3) {
      return (
        <div class="grid-container">
          {Object.keys(Days).map((key, index) => (
            <div
              className={"grid-item"}
              key={key}
              onClick={() => {
                setIsDay(index);
                setIsStage(4);
                setisDisplayedMonth(true);
                setisDisplayedDay(false);
              }}
            >
              {Number(index + 1) >= 10
                ? Number(index + 1)
                : "0" + Number(index + 1)}
            </div>
          ))}
        </div>
      );
    }
  }

  function StageMonths() {
    if (isStage === 2) {
      return (
        <div className="dateBoxMonths">
          {Months.map((key, index) => (
            <div
              key={index}
              className="date"
              onClick={() => {
                setIsMonth(index);
                setIsStage(3);
                setisDisplayedMonth(true);
                setisDisplayedDay(true);
              }}
            >
              {" "}
              <p> {key} </p>
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    
    <div className="RegisterPage">
      {redirect ? <Redirect to='/' />: null } 
      <div className="container register-form">
        <div className="form-horizontal">
          <div className="note">
            <p>Register.</p>
          </div>
          <h4
            style={ErrorPassword ? { display: "block" } : { display: "none" }}
          >
            {" "}
            Can't be empty and you can only use alphabetic character.
          </h4>
          <div className="form-content">
            <div className="row">
              <div className="col-md-6">
                <div className="Block">
                  <label for="Name">Name:</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    style={
                      NameValidate
                        ? { background: "Green" }
                        : { background: "red" }
                    }
                    onInput={e => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <label className="exampleLabel">Example"Bengt"</label>

                <h4
                  style={
                    ErrorPassword ? { display: "block" } : { display: "none" }
                  }
                >
                  {" "}
                  Email need to be something like "emailname@email.com"
                </h4>
                <div className="form-group">
                  <label for="Email">Email:</label>
                  <input
                    type="Email"
                    required
                    className="form-control"
                    style={
                      EmailValidate
                        ? { background: "Green" }
                        : { background: "red" }
                    }
                    onInput={e => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <label className="exampleLabel">Example"Ola@email.com"</label>
              </div>

              <h4
                style={
                  ErrorPassword ? { display: "block" } : { display: "none" }
                }
              >
                {" "}
                Password needs to be 8 character or longer
              </h4>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="pwd">Password:</label>
                  <input
                    name="pwd"
                    type="password"
                    required
                    className="form-control"
                    style={
                      PasswordValidate
                        ? { background: "Green" }
                        : { background: "red" }
                    }
                    onInput={e => {
                      setPassword(e.target.value);
                    }}
                  />
                  <br></br>
                  <label className="exampleLabel">More then 8 characters</label>
                </div>
                <h4
                  style={
                    PassConfirmError
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  {" "}
                  Password confirmation needs to be the same as Password.
                </h4>
                <div className="form-group">
                  <label for="pwd">Password again:</label>
                  <input
                    name="pwd"
                    type="password"
                    required
                    className="form-control"
                    style={
                      PassConfirmError
                        ? { background: "Green" }
                        : { background: "red" }
                    }
                    onInput={e => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>

                <h4>Birthdate</h4>
                <div className="fullDate">
                  <span
                    onClick={() => {
                      setIsStage(1);
                      setisDisplayedYear(false);
                      setisDisplayedDay(false);
                      setisDisplayedMonth(true);
                    }}
                  >
                    {isYear} /
                  </span>{" "}
                  <span
                    onClick={() => {
                      setIsStage(2);
                      setisDisplayedMonth(false);
                      setisDisplayedYear(true);
                      setisDisplayedDay(false);
                    }}
                  >
                    {isMonth + 1 >= 10 ? isMonth + 1 : "0" + (isMonth + 1)} /
                  </span>{" "}
                  <span
                    onClick={() => {
                      setIsStage(3);
                      setisDisplayedDay(true);
                      setisDisplayedYear(true);
                      setisDisplayedMonth(true);
                    }}
                  >
                    {isDay + 1 >= 10 ? isDay + 1 : "0" + (isDay + 1)}
                  </span>{" "}
                </div>
                <h3
                  style={
                    isDisplayedYear ? { display: "none" } : { display: "block" }
                  }
                >
                  Year
                </h3>
                <div
                  className="dateBox"
                  style={
                    isDisplayedYear ? { display: "none" } : { display: "grid" }
                  }
                >
                  {years(isYear)}
                </div>
                <h3
                  style={
                    isDisplayedMonth
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  Months
                </h3>
                {StageMonths()}
              </div>
              <h3
                style={
                  isDisplayedDay ? { display: "block" } : { display: "none" }
                }
              >
                Days
              </h3>
              {StageDay()}
            </div>
            <button
              type="button"
              className="btnSubmit"
              onClick={() => {
                // checkPassword(Password);
                // checkName(name);
                // checkEmail(email);
                // CheckconfirmPassword();
                registerApi();
                
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="RegisterImage"></div>
    </div>
  );
}

export default Register;
