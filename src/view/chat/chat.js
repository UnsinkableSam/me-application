import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import "./chat.css";


const socket = io("http://localhost:4000");
function Chat() {
    const [message, setMessage] = React.useState("");
    const [allMessages, setAllMessages] = React.useState([]);
    const [username, setUsername] = React.useState("");
    const [displayInput, setDisplayInput] = React.useState(true);
    const [allJsonMessages, setAllJsonMessages] = React.useState([]);
    const [response, setResponse] = React.useState([]);
    React.useEffect(() => {
        
        socket.on('connect', function () {
            console.info("Connected");
            socket.on("load", function (res) {
                console.log(res);
                console.log("hello");
                setAllMessages(res);
            });
            
            socket.on("chat message", function (messagesJson) {
                console.log(messagesJson);
                setResponse(messagesJson);
                setAllMessages(allMessages => ([...allMessages, messagesJson]));
                // messagesJson.forEach(element => {
                //         setAllJsonMessages(allJsonMessages => ([...allJsonMessages, element]));
                //     });
            });
        })
        return () => {
            socket.on("disconnect", function() {
                console.info("Disconnected")
            })
        }
    }, [])
    


    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            let newDate = new Date();
            let sendJson = {
                            "username": username, 
                            "date": newDate.toLocaleString(), 
                            "message": message
                            }
            socket.emit("chat message", sendJson );
            setMessage("");

        }
        
    }

    const usernameKeyPress = (event) => {
        if (event.key === 'Enter') {
            setDisplayInput(false);
            let joinDate = new Date();
            let sendJson = {
                "username": "Server",
                "date": joinDate.toLocaleString(),
                "message": username + " Just joined" 
            }
            socket.emit("joined", sendJson);
        }

    }
    return (
        <div className="chat" id="chat">
            <h1>Websocket chatt</h1>

            <h2>Messages:</h2>
            <div id="all-messages" class="all-messages">
                {allMessages.map(function(item, key){
                    let time = item.date;
                    return <p class="message" key={key}> {item.username}: {item.message} , {time}</p>
                    })
                }
            </div>
            
            <p style={displayInput ? { display: "none" } : { display: "block" }}><strong>Write new message:</strong></p>
            <input style={displayInput ? {display:"none"} : {display:"block"}} id="new-message" class="new-message" 
                    value={message} onKeyDown={onKeyPress} onChange={(e) => {setMessage(e.target.value)}} />
            
            <p className="username" style={displayInput ? { display: "block" } : { display: "none" }}><strong>username:</strong></p>
            <input style={displayInput ? { display: "block" } : { display: "none" }} id="new-message" class="new-message" 
                    value={username} onKeyDown={usernameKeyPress} onChange={(e) => { setUsername(e.target.value) }} />
        </div>
    );
}

export default Chat;