import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('Enter text here');

    const handleUp = () => {
        let newte = text.toUpperCase();
        setText(newte);
        props.showAlert("Converted to uppercase" , "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <h1>{props.heading}</h1>
            <div className='container'>
                <div className="form-floating">
                    <textarea className="form-control" onChange={handleOnChange} placeholder="Leave a comment here" id="floatingTextarea" value={text} style={{backgroundColor: props.mode==='light'? 'rgb(36 74 104)': 'white'}}></textarea>
                    <label htmlFor="floatingTextarea">Comments</label>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUp}>Convert to Uppercase</button>
            </div>
            <div className="container my-5">
                <h1>Your text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text: "Enter something"}</p>
            </div>
        </>
    )
}

