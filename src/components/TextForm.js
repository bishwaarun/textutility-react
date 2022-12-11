import React, { useState } from 'react'

export default function TextForm(props) {

    let handleUpClick = () => {
        //console.log("You have clicked on upper button");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase !","success");
    }

    let handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase !","success");
    }

    let handleClearClick = () => {
        setText('');
        props.showAlert("Text cleared !","success");
    }

    let handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard !","success");
    
    }
    
    let handleExtraSpaceClick = () => {
        var newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed !","success");
    }

    let handleOnChange = (event) => {
        //  console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    //text ="new value"; - Wrong way to change the state
    // setText("new value"); - Correct way to change the state
    return (
        <div style={{color:props.mode==="light"?"black":"white"}}>
            <h1>{props.heading}</h1>
            <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaceClick}>Remove Extra Text</button>
            </div>
            
            <div className="container my-4">
            <hr/>
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').filter((element)=>{return element.length!==0} ).length} words and {text.length} characters </p>
                <p>{text.split(' ').filter((element)=>{return element.length!==0} ).length * 0.008} minutes read</p>
                <h2>Preview </h2>
                <p>{text.length>0?text:"Nothing to preview"} </p>
            </div>

        </div>
    )
}
