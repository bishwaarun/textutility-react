import React, {useState} from 'react'

export default function TextForm(props) {
   
    let handleClickUpCase = ()=>{
        //console.log("You have clicked on upper button");
        let newText = text.toUpperCase();
        setText(newText);
    }

    let handleOnChange = (event)=>{
      //  console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter the text");
    //text ="new value"; - Wrong way to change the state
   // setText("new value"); - Correct way to change the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleClickUpCase}>Convert to Uppercase</button>
        </div>
    )
}
