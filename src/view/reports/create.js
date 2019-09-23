// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import "../../App.css";
import "./create.css";
import axios from 'axios';
import { Redirect } from 'react-router'
function Create() {
    const [filename, setFilename] = React.useState("");
    const [file, setFile] = React.useState("");
    // eslint-disable-next-line
    const [responseText, setresponseText] = React.useState("");
    const [redirect, setRedirect] = React.useState(false);
    const postFile = (e) => {
        e.preventDefault();
        console.log("ASDG");
        console.log(filename);
        console.log(file);
        axios.post('http://localhost:1337/reports',
            {
                filename: filename,
                file: file
            },
            {
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

    // const getFile = (e) => {
    //     e.preventDefault();
        
    //     axios.get('https://me-api.sam-corp.me/reports/markdowntest1')
    //         .then((response) => {
    //             setresponseText(response);
                
    //         }, (error) => {
    //             console.log(error);
    //         });

    // }
    return (
        <form className="create">
            {redirect ? <Redirect to="/" /> : null} 
            <label for="exampleFormControlInput1">Filename</label>
            <div className="form-group create-form">
                
                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Filename" 
                    onChange={e => setFilename(e.target.value)}/>
            </div>
                
            <label for="exampleFormControlTextarea1">Text</label>
            <div className="form-group create-form">
                    
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setFile(e.target.value)}>

                </textarea>
                {/* <button onClick={getFile}>get </button>
                <div className="Container" dangerouslySetInnerHTML={{
                    __html:
                        responseText.data
                }}></div> */}
                
                </div>
            <button onClick={postFile}>Submit</button>
        </form>
    );
}

export default Create;
