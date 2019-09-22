import React from "react";
import "../../App.css";
import "./login.css";
import axios from 'axios';
function login() {

    const postLogin = (e) => {
        e.preventDefault();
        console.log("hello");

        axios.post('http://localhost:8333/login', {
            username: "t@test.se",
            password: "123"
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
                                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                    <div class="form-label-group">
                                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
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

export default login;
