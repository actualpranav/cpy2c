import React from "react";
import { useStateValue } from "./StateProvider";
import "./Elements.css";
function Elements({ id }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
      },
    });
  };
  return (
    <div className="element">
      <div className="element__info">
        <p>{id}</p>
      </div>
      <button className="glow-on-hover" onClick={addToBasket}>
        Add to list
      </button>
    </div>
  );
}

export default Elements;
