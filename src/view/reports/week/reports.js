import React, { useState, useEffect } from 'react';

//import logo from "../../../logo.svg";
import "../../../App.css";
import axios from 'axios';

function Reports(props) {
    const [text, setText] = useState("");
    const { id} = props.match.params

 
    useEffect(() => {
        let { id } = props.match.params
        axios.get('http://localhost:8333/reportHtml/' + id)
            .then((response) => {
                setText(response.data);

            }, (error) => {
                console.log(error);
            });
    }, [id]);
    
    // return <div>{getFile(props)};</div>;
    return (
        <div>
            <h1> {id} </h1>
            <div className="Container" dangerouslySetInnerHTML={{
                __html:
                    text
            }}></div>
        </div>
       
    );
}

export default Reports;
