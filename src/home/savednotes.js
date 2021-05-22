import React, { Component } from "react";
import "../css/style.css";
// import JSON from './notes.json'
import GetNotes from "./function";
import Toolbox from "../home/toolbox/toolbox";

class RenderNotes extends Component {
  state = {
    deletedOne: 0,
    searchText: "",
  };

  deleteMe = (id, title, note) => {
    this.props.JSONnotes.map((item, index) => {
      if (item.id === id && item.title === title && item.note === note) {
        this.props.pushTrash(item);
        // add to bin Function

        this.props.JSONnotes.splice(index, 1);
      }
      this.props.updateNotes();
      return this.setState({
        deletedOne: index,
      });
    });
  };

  // Handler for Search bOX

  searchNotes = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  clearSearchbox = () => {
    document.getElementById("searchBox").value = "";
    this.setState({
      searchText: "",
    });
  };

  render() {
    return (
      <div>
        <Toolbox
          clearSearchbox={this.clearSearchbox}
          searchNotes={this.searchNotes}
          {...this.props}
        />
        <GetNotes
          deleteMe={this.deleteMe}
          searchText={this.state.searchText}
          JSONnotes={this.props.JSONnotes}
          {...this.props}
        />
      </div>
    );
  }
}

export default RenderNotes;
