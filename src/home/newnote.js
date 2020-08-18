import React, { Component } from "react";
import RenderNotes from "../home/savednotes";

class NewNote extends Component {
  constructor() {
    super();
    this.transition = "0px";

    this.state = {
      userinput: "",
      titleInput: "",
      status: "writing",
    };
  }

  animationCard = (open) => {
    if (open) {
      this.transition = "auto";
    } else if (!open) {
      this.transition = "0px";
    }
    {
      this.forceUpdate();
    }
  };
  // Title Change Event Handler
  titleInputChange = (event) => {
    this.setState({ titleInput: event.target.value });
  };

  // Notes Typed Change handler
  userInputChangeHandler = (event) => {
    this.setState({ userinput: event.target.value });
  };

  // Save Button onClick Function

  saveNote = () => {
    if (this.state.userinput !== "") {
      var length = this.props.JSONnotes.length;
      if (length === 0) {
        this.props.JSONnotes.push({
          id: "1",
          title: this.state.titleInput,
          note: this.state.userinput,
        });
      } else {
        var i = this.props.JSONnotes[length - 1];
        var newId = Number(i.id) + 1;
        newId = newId.toString();
        this.props.JSONnotes.push({
          id: newId,
          title: this.state.titleInput,
          note: this.state.userinput,
        });
        for (var j = 0; j <= length; j++) {
          this.setState({
            userinput: "",
            titleInput: "",
            status: j,
          });
        }
      }

      this.clearNote();
      this.props.updateNotes();
    }
  };

  // Clear Button onClick Function call
  clearNote = () => {
    document.getElementById("titleInputBox").value = "";
    document.getElementById("userInputBox").value = "";
  };
  // Update JSON object as String

  // Edit note State Change
  editNote = (id, title, note) => {
    this.animationCard(true);

    document.getElementById("titleInputBox").value = `${title}`;
    document.getElementById("userInputBox").value = `${note}`;

    this.setState({
      userinput: `${note}`,
      titleInput: `${title}`,
    });
  };

  render() {
    return (
      <div className="parent">
        <div className="circle">
          <div
            className="btn-Small"
            onClick={(event) => {
              var value = false;
              this.transition === "0px" ? (value = true) : (value = false);
              this.animationCard(value);
            }}
          >
            {" "}
            <i className="fas fa-plus"></i>{" "}
          </div>
        </div>

        <div style={{ height: `${this.transition}` }} className="card">
          <p className="heading-1">Title</p>
          <textarea
            type="text"
            id="titleInputBox"
            onChange={this.titleInputChange}
            className="titlebox"
            placeholder="Give me a Name"
          ></textarea>

          <p className="heading-2">enWrite Here</p>
          <textarea
            type="text"
            id="userInputBox"
            onChange={this.userInputChangeHandler}
            className="inputBox"
            placeholder="What's On Your Mind"
          ></textarea>
          <div>
            <button className="button" align="center" onClick={this.saveNote}>
              Save
            </button>
            <button className="button" onClick={this.clearNote}>
              Clear
            </button>
          </div>
        </div>
        <br />

        <RenderNotes
          bin={this.state.bin}
          editNote={this.editNote}
          userinput={this.state.userinput}
          JSONnotes={this.props.JSONnotes}
          {...this.props}
        />
      </div>
    );
  }
}

export default NewNote;
