import React from "react";
import { useStateValue } from "./StateProvider";

function Checkoutlist({ id }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //remove the item from  the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutlist">
      <p>{id}</p>
      <button className="glow-on-hover" onClick={removeFromBasket}>
        Remove from list
      </button>
    </div>
  );
}

export default Checkoutlist;
