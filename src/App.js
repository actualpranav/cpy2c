// import React from 'react';
import { React, useEffect } from "react";

import Inputbox from "./Inputbox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useStateValue } from "./StateProvider";

import { auth } from "./firebase";

import Header from "./Header";
import Login from "./Login";
import Lists from "./Lists";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //only runs once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);
      if (authUser) {
        //the user just logged in/ was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Inputbox />
            <Lists />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
