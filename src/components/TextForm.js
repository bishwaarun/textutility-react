import React, { useState } from 'react'

export default function TextForm(props) {

    let handleClickUpCase = () => {
        //console.log("You have clicked on upper button");
        let newText = text.toUpperCase();
        setText(newText);
    }

    let handleClickLoCase = () => {
        //console.log("You have clicked on upper button");
        let newText = text.toLowerCase();
        setText(newText);
    }

    let handleOnChange = (event) => {
        //  console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    //text ="new value"; - Wrong way to change the state
    // setText("new value"); - Correct way to change the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="container">
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-1" onClick={handleClickUpCase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleClickLoCase}>Convert to Lowercase</button>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters </p>
                <p>{text.split(' ').length * 0.008} minutes read</p>
                <h2>Preview </h2>
                <p>{text} </p>
            </div>

        </div>
    )
}
