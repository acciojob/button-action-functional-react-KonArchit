import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  let [click, setClick] = useState(false)

  function handleClick(){
    // click = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    setClick(!click)
  }

  return(
    <div id="main">
      {click && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      {/* <p id="para">{click}</p> */}
      <button id="click" onClick={handleClick}>Click</button>
    </div>
  );
}


export default App;
