import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import AppBar from "./components/navBar";
import UserList from "./containers/userList";
import UserProfile from "./containers/userProfile";

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#FAFAFA" }}>
        <AppBar />
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/:id" render={props => <UserProfile {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
