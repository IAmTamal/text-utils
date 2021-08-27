import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              <h3>Enter text here</h3>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </form>

        <div className="buttons">
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to uppercase
          </button>
        </div>
      </div>
    </div>
  );
}
