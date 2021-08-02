import React from "react";
import Checkoutlist from "./Checkoutlist";
import "./ListOut.css";
function ListOut() {
  return (
    <div className="ListOut">
      <h2>ListOut</h2>
      <p className="ListOut__id">
        <small>{ListOut.id}</small>
      </p>
      {ListOut.data.basket?.map((item) => (
        <Checkoutlist id={item.id} />
      ))}
    </div>
  );
}

export default ListOut;
