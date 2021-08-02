// import React from 'react';
import { React, useState } from 'react';


import Inputbox from "./Inputbox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

export default function App() {

  //   const [{}, dispatch] = useStateValue();
  // useEffect(() => {
  //   //only runs once when the app component loads...
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("the user is >>>", authUser);
  //     if (authUser) {
  //       //the user just logged in/ was logged in
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       //the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);

  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Inputbox />
          </Route>
          {/* <Route path="/">
            <Header />
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}