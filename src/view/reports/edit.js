import React, { useState, useEffect } from 'react';
import "../../App.css";
import "./create.css";
import { Markdown } from 'react-showdown';
import Popup from "reactjs-popup";
import Login from "../login/Login.js"
import axios from 'axios';
import { Redirect } from 'react-router'

function Edit() {
    const [redirect, setRedirect] = React.useState(false);
    const [responseText, setresponseText] = React.useState("");
    const [responseName, setresponseName] = React.useState("");
    const [updateFile, setUpdateFile] = React.useState("");
    const [updateNewFile, setUpdateNewFile] = React.useState("");
   
    const Update = (e) => {
        e.preventDefault();
        axios.post('https://me-api.sam-corp.me/updateReports/', {
            filename: updateFile,
            file: updateNewFile
        }, {
                headers: {
                    'sexbomb': localStorage.getItem("token") 
                }
                })
            .then((response) => {
                setRedirect(true);
                console.log(response);
            }, (error) => {
                console.log(error.response);
            });

    }
        
    const getFile = (e, name) => {
        e.preventDefault();
        console.log(name);
        setUpdateFile(name);
        axios.get('https://me-api.sam-corp.me/reports/week/' + name)
            .then((response) => {
                console.log(response.data.filetext);
                setresponseText(response.data.filetext);

            }, (error) => {
                console.log(error);
            });

    }

    console.log(localStorage.getItem("token"));

    useEffect(()  => {
        axios.get('https://me-api.sam-corp.me/reports/')
            .then((response) => {
                let textnames = [];
                console.log(response.data[0].filename);
                response.data.forEach(element => {
                    textnames.push(<option value={element.filename}>{element.filename}</option>) ;                    
                });
                setresponseName(textnames);
                console.log("helloooooo");
            }, (error) => {
                console.log(error);
            });
    },[]);
    return (
        
        <form className="create">
            {redirect ? <Redirect to="/" /> : null} 
            <label> Choose text to  update</label>
            
            <select onChange={(e) => { getFile(e, e.target.value) }}>
                <option>Select text</option>
                {responseName}
            </select>
            <br></br>
            <br></br>

            <label for="exampleFormControlTextarea1">Text</label>
            <div className="form-group create-form">

                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={responseText} 
                    onChange={(e) => { setUpdateNewFile(e.target.value); setresponseText(e.target.value)}}>
                    
                </textarea>
                {/* <button onClick={(e) => { getFile(e, "markdowntest1")}}>get </button> */}
                

            </div>
            <button onClick={(e) => { Update(e) }}> Update </button>
        </form>
    );
}

export default Edit;
