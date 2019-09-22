import React from "react";
import "../../App.css";

import Popup from "reactjs-popup";
import Login from "../login/Login.js";
import Create from "./create.js";
import Edit from "./edit.js";
function Report() {
    console.log("hello");
    const [createFile, setCreateFile] = React.useState(false);
    const [editFile, setEditFile] = React.useState(false);
    return (
        <div id="Report">

            <ul>
                <li><button onClick={() => { setCreateFile(!createFile); setEditFile(false)}}>create</button></li>
                <li><button onClick={() => { setEditFile(!editFile); setCreateFile(false)}}>Edit</button></li>
            </ul>
            {createFile ? <Create /> : null}
            {editFile ? <Edit /> : null}
            
        </div>
    );
}

export default Report;
