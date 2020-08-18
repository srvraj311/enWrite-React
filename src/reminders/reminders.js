import React, { Component } from "react";
import "../css/reminders.css";

import NewReminder from "./new-reminder";

import JSON from "./reminders.json";

class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBox: "0px",
      update: "false",
    };

    this.showInput = () => {
      if (this.state.inputBox === "0px") {
        this.setState({
          inputBox: "70%",
        });
      } else if (this.state.inputBox === "70%") {
        this.setState({
          inputBox: "0px",
        });
      }
    };

    this.update = () => {
      this.setState({
        update: "True",
      });
    };
  } //End of constructor

  render() {
    return (
      <div className="holder">
        <div className="circle">
          <div
            onClick={(event) => {
              this.showInput();
            }}
            className="circle-add"
          >
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <NewReminder
          showInput={this.showInput}
          update={this.update}
          inputBox={this.state.inputBox}
          ReminderJSON={this.props.reminders}
          {...this.props}
        />
      </div>
    );
  }
}

export default Reminders;
