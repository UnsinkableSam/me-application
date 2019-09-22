import React, { useState, useEffect } from 'react';
import "../../App.css";
import "./login.css";
import axios from 'axios';

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const postLogin = (e) => {
        e.preventDefault();
        console.log("hello");

        axios.post('https://me-api.sam-corp.me/login', {
            username: username,
            password: password
        })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data);
                window.location.reload();
            }, (error) => {
                console.log(error.response);
            });

    }
    return (
        <div className="modal" id="login">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <h5 class="card-title text-center">Sign In</h5>
                            <form class="form-signin">
                                <div class="form-label-group">
                                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" onChange={(e) => { setUsername(e.target.value) }} required autofocus/>
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                    <div class="form-label-group">
                                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} required/>
                                        <label for="inputPassword">Password</label>
                                    </div>
                                <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={postLogin} type="submit">Sign in</button>
                            </form>
                                </div>
                        </div>
                </div>
        </div>
    </div>
    );
}

export default Login;
