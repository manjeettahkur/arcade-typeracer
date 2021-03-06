import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ModeHandler from "./containers/ModeHandler/mode_handler";
import Homepage from "./containers/Homepage/home";
import ErrorModal from "./containers/Error_Modal/error_modal";

import { isDev } from "./util";

import { Theme } from "./themes/theme_colors.";
import { useDispatch } from "react-redux";
import { setWs } from "./actions/socket_actions";

import "./App.scss";

// Number of words typed / time taken to complete

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setWs(isDev()));
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: Theme.bgColor,
      }}
    >
      <div className="inner-div">
        <ErrorModal />
        <Router>
          <Switch>
            <Route component={ModeHandler} path="/:mode" />
            <Route component={Homepage} path={"/"} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
