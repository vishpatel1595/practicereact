import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("lowercase was clicked" + text);
    let newText = text.toUpperCase();
    //props.getUpperValue(newText);
    setText(newText)
    props.setAlert("Converted to uppercase","Success");
  } 
  const handlelowClick = () => {
    console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    //props.getUpperValue(newText);
    setText(newText)
    props.showAlert("converted to Lowercase", "Success");
  }
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }
  const handleclearClick = (event) => {
    setText("");
    props.showAlert("Text Cleared", "Success");
  }
  const [text, setText] = useState('Enter text here2');
  return (
    <>
      <div className={`p-3 container card-${props.mode} bg-${props.mode}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" cols="30" rows="8"></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary m-2" onClick={handlelowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary m-2" onClick={handleclearClick}>Clear</button>
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text}</h1>
      </div>
      <div className="container">
        <div className="text"><p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} ><span className="{words}">{text.split(" ").filter((element)=>{return element.length!==0}).length} words</span> <span className="character">{text.length} character</span></p></div>
        <div className="text"><p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} ><span className="{words}">{0.00008 * text.split(" ").length} in minites</span> <span className="character">{text.length} character</span></p></div>
        <div className="text"><p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} ><span className="{words}">{text.split(" ").length} in minites</span></p></div>
        <p>{text}</p>
      </div>
    </>
  )
}