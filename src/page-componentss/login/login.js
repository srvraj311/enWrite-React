import React, { Component } from "react";
import "./login.css";
import enwrite from "./New Project.svg";
import axios from "axios";
import URL from "../../config.js";

class Login extends Component {
  state = {
    loginField: "hidden",
    signupfield: "hidden",
    username: "",
    password: "",
    email: "",
    errcode: 0,
    login_status: "",
    key: "",
  };

  showloginfield = () => {
    axios.defaults.headers.post["Content-Type"] = "application/json";
    if (this.state.loginField === "hidden") {
      this.setState({ loginField: "visible", signupfield: "hidden" });
    } else if (this.state.loginField === "visible") {
      var json = {
        username: this.state.username.toString(),
        password: this.state.password.toString(),
      };
      axios({
        method: "post",
        url: `${URL.URL}/login`,
        data: JSON.stringify(json),
      })
        .then((res) => {
          this.setState({ errcode: Number(res.data.status) });
          try {
            if (this.state.errcode === 200) {
              this.setState({ login_status: "active", key: res.data.key });
              localStorage.setItem(
                "user",
                JSON.stringify({
                  login_status: "active",
                  key: this.state.key,
                  username: this.state.username,
                })
              );
              this.props.login_update(this.state.key, this.state.username);
            }
          } catch {
            console.log("Not logged in");
          }
        })
        .catch((e) => window.alert("Network Error"));
    }
  };

  showsignupfield = () => {
    if (this.state.signupfield === "hidden") {
      this.setState({ signupfield: "visible", loginField: "hidden" });
    } else if (this.state.signupfield === "visible") {
      axios.defaults.headers.post["Content-Type"] = "application/json";
      var json = {
        username: this.state.username.toString(),
        password: this.state.password.toString(),
        email: this.state.email.toString(),
      };
      axios({
        method: "POST",
        url: `${URL.URL}/signup`,
        data: JSON.stringify(json),
      })
        .then((res) => {
          this.setState({ errcode: Number(res.data.status) });
        })
        .catch((e) => console.log(e));
    }
  };

  signupfield = () => {
    if (this.state.signupfield === "visible") {
      return (
        <form className="top-container">
          <input
            type="text"
            placeholder="Email"
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => {
              this.setState({ username: event.target.value });
            }}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </form>
      );
    } else {
      return null;
    }
  };

  loginfield = () => {
    if (this.state.loginField === "visible") {
      return (
        <form className="top-container">
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => {
              this.setState({ username: event.target.value });
            }}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </form>
      );
    } else {
      return null;
    }
  };

  session_start = () => {
    if (this.state.session === "active" && this.state.key !== "") {
      return;
    }
  };
  status = () => {
    if (this.state.errcode === 0) {
      return "Sign-Up Or Login to continue";
    } else if (this.state.errcode === 302) {
      return "Incorrect Credentials";
    } else if (this.state.errcode === 303) {
      return "Not registered, Try Sign-Up";
    } else if (this.state.errcode === 200) {
      return "Success !";
    } else if (this.state.errcode === 300) {
      return "Server is Facing Technical Error";
    } else if (this.state.errcode === 301) {
      return "Account exists, Try Log-in";
    }
  };
  render() {
    return (
      <div className="login-container">
        <div className="image-container">
          <img src={enwrite} alt="Logo-Main"></img>
        </div>
        {this.loginfield()}
        {this.signupfield()}
        <div className="errcode">
          <p>{this.status()}</p>
        </div>
        <div className="bottom-container">
          <button className="login-btn" onClick={this.showloginfield}>
            Login
          </button>
          <button className="signup-btn" onClick={this.showsignupfield}>
            Signup
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
