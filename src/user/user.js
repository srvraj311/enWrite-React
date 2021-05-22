import React, { Component } from "react";
import "./user.css";

class User extends Component {
  logout = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  render() {
    return (
      <div className="parent-user">
        <div className="image-box">
          <img src="https://res.cloudinary.com/dvmsk482x/image/upload/v1600967529/user_n2mvnq.png" />
        </div>

        <div className="username">
          {JSON.parse(localStorage.getItem("user")).username}
        </div>
        <div className="email-id">{this.props.email}</div>
        <div
          className="logout"
          onClick={(event) => {
            this.logout();
          }}
        >
          Logout
        </div>
      </div>
    );
  }
}

export default User;
