import React, { Component } from "react";
import "./login.css";
import enwrite from "./New Project.svg";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
  }
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

  status = () => {
    if (this.state.errcode === 302) {
      return (
        <div className="errcode">
          <p>Incorrect Credentials</p>
        </div>
      );
    }
    if (this.state.errcode === 303) {
      return (
        <div className="errcode">
          <p>Not registered, Try Sign-Up</p>
        </div>
      );
    }
    if (this.state.errcode === 200) {
      return (
        <div className="errcode">
          <p>Success !</p>
        </div>
      );
    }
    if (this.state.errcode === 300) {
      return (
        <div className="errcode">
          <p>Server is Facing Technical Error</p>
        </div>
      );
    }
    if (this.state.errcode === 301) {
      return (
        <div className="errcode">
          <p>Account exists, Try Log-in</p>
        </div>
      );
    }
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
        url: "http://0.0.0.0:5000/login",
        data: JSON.stringify(json),
      })
        .then((res) => {
          this.setState({ errcode: res.data.status });
          try {
            this.setState({ login_status: "active", key: res.data.key });
            this.props.login_update(this.state.key, this.state.username);
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
      console.log("ran");
      axios.defaults.headers.post["Content-Type"] = "application/json";
      var json = {
        username: this.state.username.toString(),
        password: this.state.password.toString(),
        email: this.state.email.toString(),
      };
      axios({
        method: "post",
        url: "http://0.0.0.0:5000/signup",
        data: JSON.stringify(json),
      })
        .then((res) => {
          this.setState({ errcode: res.data.status });
          console.log(res.data.message);
        })
        .catch((e) => console.log(e));
    }
  };

  signupfield = () => {
    if (this.state.signupfield === "visible") {
      return (
        <div className="top-container">
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
        </div>
      );
    } else {
      return null;
    }
  };

  loginfield = () => {
    if (this.state.loginField === "visible") {
      return (
        <div className="top-container">
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
        </div>
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
  render() {
    return (
      <div className="login-container">
        <div className="image-container">
          <img src={enwrite} alt="Logo-Main"></img>
        </div>
        {this.loginfield()}
        {this.signupfield()}
        {this.status()}
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
