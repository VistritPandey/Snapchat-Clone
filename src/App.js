import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app__body">
          <Switch>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
