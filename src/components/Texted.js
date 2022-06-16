// rfc snippet
import React, { useState } from "react";

const Texted = (props) => {
  const [text, setText] = useState("");
  const onClickUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const onClickLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const onClickClear = () => {
    let newText = "";
    setText(newText);
  };
  const print = () => {
    window.print();
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [btntext,setBtnText]=useState('enable light mode')
  const [style, setStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const darkMode = () => {
    if (style.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText('enable dark mode');
    } else {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText('enable light mode');
    }
  };
  return (
    <>
      <div style={style}>
        {/* <h1>{props.bol}</h1> */}
        <div className=" container my-3">
          <h1 className="greenary">Enter Text to analyze below</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-success my-3" onClick={onClickUp}>
            uppercase
          </button>
          <button className="btn btn-success mx-3" onClick={onClickLow}>
            lowercase
          </button>
          <button className="btn btn-success mx-2" onClick={onClickClear}>
            clear text
          </button>
          <button className="btn btn-success mx-2" onClick={print}>
            print screen
          </button>
          <button className="btn btn-success mx-2" onClick={darkMode}>
            {btntext}
          </button>
        </div>
      </div>
      <div className="container">
        <h1 className="greenary">Text Summary</h1>
        <p className="whitish">
          {text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} letters
        </p>
        <h1 className="greenary">Preview</h1>
        <p className="whitish">{text}</p>
        <hr className="yellowish"></hr>
        <p className="whitish">
          TIME TO READ THE TEXT{" "}
          <b className="greenary">{0.008 * text.split(" ").length}</b> minutes{" "}
        </p>
      </div>
    </>
  );
};

export default Texted;
