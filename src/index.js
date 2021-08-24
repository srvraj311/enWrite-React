import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Redirect, BrowserRouter, Route } from "react-router-dom";

// Components

import Login from "./page-componentss/login/login.js";
import Session from "./session.js";

class App extends Component {
  constructor() {
    super();
    try {
      this.temp = JSON.parse(localStorage.getItem("user")).login_status;
    } catch (e) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          login_status: "not-active",
          username: "",
          underwear: "",
        })
      );
    }
    this.state = {
      login_status: JSON.parse(localStorage.getItem("user")).login_status,
      underwear: JSON.parse(localStorage.getItem("user")).key,
      username: JSON.parse(localStorage.getItem("user")).username,
    };
  }

  userdata = JSON.parse(localStorage.getItem("user"));

  login_update = (k, u) => {
    this.setState({ login_status: "active", underwear: k, username: u });
  };
  session = () => {
    if (this.state.login_status === "active" && this.state.username !== null) {
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
    if (this.state.login_status === "not-active" || this.state.login_status == null) {
      return (
        <Login
          componentwillmount={this.UNSAFE_componentWillMount}
          login_status={this.state.login_status}
          key={this.state.key}
          username={this.state.username}
          login_update={this.login_update}
        />
      );
    }
  };
  render() {
    return (
        <div>
          {this.session()}
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
