import React from "react";

import "./Home.css";
import Elements from "./Elements";
import Inputbox from "./Inputbox";
import { useStateValue } from "./StateProvider";

 

function Home() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="home">
      <div className="container">
        <div className="home__row">
          <Elements id="Pranav Prakash Jadhav" />
          <Elements id="21910755" />
          <Elements id="324020" />
          <Elements id="D" />
          <input
            type="text"
            value={text}
            placeholder="Type some text here"
            onChange={(event) => setText(event.target.value)}
          />
          <button className="glow-on-hover" onClick={}>
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
