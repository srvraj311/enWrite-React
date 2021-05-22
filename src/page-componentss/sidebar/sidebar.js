import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  // const closeSidebar = () =>{
  //     props.sidebarUpdate('closed')
  // }
  var boxWidth = "0px";
  var boxDisplay = "none";

  if (props.sidebar === "opened") {
    boxWidth = "300px";
    boxDisplay = "block";
  } else if (props.sidebar === "closed") {
    boxWidth = "0px";
    boxDisplay = "none";
  }

  var logout = () => {
    props.sidebarUpdate("closed");
    localStorage.clear();
    window.location.reload(false);
  };
  return (
    <div>
      <div style={{ width: boxWidth }} className="sidebarContainer">
        <i
          onClick={(event) => props.sidebarUpdate("closed")}
          className="fas fa-times"
          aria-hidden="true"
        >
          {" "}
        </i>
        <div className="ul">
          <Link
            onClick={(event) => props.sidebarUpdate("closed")}
            className="sidebarLink"
            to="/home"
          >
            {" "}
            <i className="fas fa-sticky-note"></i>My Notes{" "}
          </Link>
          <Link
            onClick={(event) => props.sidebarUpdate("closed")}
            className="sidebarLink"
            to="/reminders"
          >
            {" "}
            <i className="fas fa-bell"></i>Reminders{" "}
          </Link>
          <Link
            onClick={(event) => props.sidebarUpdate("closed")}
            className="sidebarLink"
            to="/bin"
          >
            {" "}
            <i className="fas fa-trash"></i> Bin{" "}
          </Link>
          <Link
            onClick={(event) => props.sidebarUpdate("closed")}
            className="sidebarLink"
            to="/about"
          >
            {" "}
            <i className="fas fa-info-circle"></i>About us{" "}
          </Link>
          <Link
            onClick={(event) => props.sidebarUpdate("closed")}
            className="sidebarLink"
            to="/settings"
          >
            {" "}
            <i className="fas fa-cog"></i>Settings{" "}
          </Link>
          <Link to="/" onClick={(event) => logout()} className="sidebarLink">
            {" "}
            <i className="fas fa-sign-out-alt"></i>Log-Out{" "}
          </Link>
        </div>
      </div>

      <div
        style={{ display: boxDisplay }}
        className="fullscreen"
        onClick={(event) => props.sidebarUpdate("closed")}
      ></div>
    </div>
  );
};

export default Sidebar;
