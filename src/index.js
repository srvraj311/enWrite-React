import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Redirect, BrowserRouter, Route } from "react-router-dom";

// Components

import Login from "./page-componentss/login/login.js";
import Session from "./session.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { login_status: "not-active", underwear: "", username: "" };
    this.login_update = (k, u) => {
      this.setState({ login_status: "active", underwear: k, username: u });
    };
    this.session = () => {
      if (this.state.login_status === "active") {
        return (
          <BrowserRouter>
            <Redirect to="/home" />
            <Route
              path="/home"
              component={() => (
                <Session
                  underwear={this.state.underwear}
                  username={this.state.username}
                />
              )}
            />
          </BrowserRouter>
        );
      }
      if (this.state.login_status === "not-active") {
        return (
          <Login
            login_status={this.state.login_status}
            key={this.state.key}
            username={this.state.username}
            login_update={this.login_update}
          />
        );
      }
    };
  }
  render() {
    return this.session();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
