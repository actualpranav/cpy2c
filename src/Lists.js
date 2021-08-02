import ListOut from "./ListOut";
import "./Lists.css";
import { db } from "./firebase";
import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";

function Lists() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("lists")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setLists(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setLists([]);
    }
  }, [user]);

  return (
    <div className="lists">
      <h1>Your list</h1>
      <div className="ListOut__ListOut">
        {lists?.map((list) => (
          <ListOut list={list} />
        ))}
      </div>
    </div>
  );
}

export default Lists;
