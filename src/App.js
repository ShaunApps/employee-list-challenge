import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import AppBar from "./components/navBar";
import UserList from "./containers/userList";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <UserList />
      </div>
    );
  }
}

export default App;
