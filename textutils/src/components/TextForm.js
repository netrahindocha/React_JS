import { useState } from "react"
import React from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");

    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
    return (
        <div>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
                </div>
        </div>
    )
}
