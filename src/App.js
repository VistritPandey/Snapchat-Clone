import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import WebcamCapture from "./WebcamCapture";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app__body">
          <Switch>
            <Route path="/test">
              <h1>Test</h1>
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
