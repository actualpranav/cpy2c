// import React from 'react';
import { React, useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Inputbox.css';

function Inputbox() {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
   <div>
    <div className="container">
      <input
        type="text"
        value={text}
        placeholder="Type some text here"
        onChange={(event) => setText(event.target.value)}
      />
      <CopyToClipboard text={text} onCopy={onCopyText}>
        <div className="copy-area">
          <button>Copy to Clipboard</button>
          <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
            Copied!
          </span>
        </div>
      </CopyToClipboard>
      
    </div>
    <div>
      <h3
        >{text}
        </h3>
        </div>
    </div>
  );
}

export default Inputbox;