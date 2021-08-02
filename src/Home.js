import { React, useState } from "react";

import "./Home.css";
import Elements from "./Elements";
import Inputbox from "./Inputbox";
import { useStateValue } from "./StateProvider";
function Home() {
  const [ID, setID] = useState("");
  const [text, setText] = useState("");
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (id) => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
      },
    });
  };

  const register = (e) => {
    addToBasket(ID);
  };
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
            value={ID}
            placeholder="Type some text here"
            onChange={(event) => setID(event.target.value)}
          />
          <p>{ID}</p>
          {/* <button value="new" onClick={(event) => addToBasket({ ID })}>
            Add to list
          </button> */}

          <button value="new" onClick={register}>
            Add to list
          </button>

          {/* text={text} onCopy={onCopyText} */}
        </div>
      </div>
    </div>
  );
}

export default Home;
