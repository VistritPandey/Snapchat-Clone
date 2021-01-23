import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Chats from "./Chats";
import ChatView from "./ChatView";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Switch>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route path="/chats">
              <Chats />
            </Route>
            <Route path="/chats/view">
              <ChatView />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
