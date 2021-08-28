import React, { useState } from "react";

export default function TextForm(props) {
  const uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const cleartext = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <section className="form-sec">
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
          <br />
          <div className="buttons">
            <button
              className="btn btn-outline-secondary mx-2"
              onClick={uppercase}
            >
              Convert to uppercase
            </button>
            <button
              className="btn btn-outline-secondary mx-2"
              onClick={lowercase}
            >
              Convert to lowercase
            </button>
            <button
              className="btn btn-outline-secondary mx-2"
              onClick={cleartext}
            >
              Clear text
            </button>
          </div>
        </div>
      </section>

      <br />

      <section className="details-sec">
        <div className="container">
          <h4>This is your text summary</h4>
          <p>
            Total words: {text.split(" ").length} Total characters:{" "}
            {text.length}
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
      </section>
    </>
  );
}
