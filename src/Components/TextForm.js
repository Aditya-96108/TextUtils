import React, { useState } from 'react';

export default function TextForm(props) {
  const [Text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handledoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
  };

  const handleclear = () => {
    setText('');
    props.showAlert("Cleared Text", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handlespaces = () => {
    let newText = Text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Deleted Extra Spaces", "success");
  };

  const handleletter = () => {
    let paraArr = [];
    let Para = Text.split(' ');
    Para.forEach(e => {
      let letter = e.charAt(0).toUpperCase();
      let capitalWord = letter + e.slice(1);
      paraArr.push(capitalWord);
    });
    let updatedText = paraArr.join(' ');
    setText(updatedText);
    props.showAlert("Captialized First Letter of every word", "success");
  };

  const handleFindReplace = () => {
    let newText = Text.replace(new RegExp(findText, 'g'), replaceText);
    setText(newText);
    props.showAlert("Replaced", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Text Copied", "success");
  };

  const SpeakClick = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = Text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking", "success");
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <div className="row">
            <div className="col-6 col-md-2">
              <button className="btn btn-primary w-100 my-2" onClick={handleUpClick}>UpperCase</button>
            </div>
            <div className="col-6 col-md-2">
              <button className="btn btn-primary w-100 my-2" onClick={handledoClick}>LowerCase</button>
            </div>
            <div className="col-6 col-md-2">
              <button className="btn btn-primary w-100 my-2" onClick={handlespaces}>Clear spaces</button>
            </div>
            <div className="col-6 col-md-2">
              <button className="btn btn-primary w-100 my-2" onClick={handleletter}>Cap 1st Letter</button>
            </div>
            <div className="col-6 col-md-2">
              <button className="btn btn-primary w-100 my-2" onClick={copyText}>Copy Text</button>
            </div>
            <div className="col-6 col-md-2">
              <button className="btn btn-primary w-100 my-2" onClick={handleclear}>Clear Text</button>
            </div>
            <div className="col-6 col-md-2">
              <button className="btn btn-primary w-100 my-2" onClick={handleFindReplace}>Find and Replace</button>
            </div>
            <div className="col-6 col-md-2">
              <button className="btn btn-primary w-100 my-2" onClick={SpeakClick}>Speak</button>
            </div>
          </div>
          <div className="find-replace-container mt-3">
            <input
              type="text"
              className="form-control my-2"
              placeholder="Find"
              value={findText}
              onChange={(e) => setFindText(e.target.value)}
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Replace"
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>Your Text Summary</h1>
        <p>No of Sentences: {Text.split(/[".!?"]/).length - 1}</p>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes required to Read the data</p>
        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text : "Enter Something in the TextBox Above to Preview it Here"}</p>
      </div>
    </>
  );
}
