import React from "react";
import Checkoutlist from "./Checkoutlist";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h4>hello {user?.email}</h4>
          <h2 className="checkout__title">Your list</h2>
          {basket.map((item) => (
            <Checkoutlist id={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
