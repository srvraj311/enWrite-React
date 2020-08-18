import React, { Component } from "react";
import "./toolbox.css";

class Toolbox extends Component {
  render() {
    return (
      <div className="toolbox">
        <ul>
          <li>
            <textarea
              id="searchBox"
              type="text"
              onChange={this.props.searchNotes}
              placeholder="Search Notes"
            ></textarea>
          </li>

          <li onClick={this.props.clearSearchbox}>
            {" "}
            <i className="fas fa-times"> </i>{" "}
          </li>
        </ul>
      </div>
    );
  }
}

export default Toolbox;
