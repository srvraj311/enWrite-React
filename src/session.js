import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TrashBin from "./trashBin/trashbin.js";
import axios from "axios";

import Home from "./home/home.js";
import Reminders from "./reminders/reminders.js";
import Header from "./page-componentss/header/header.js";
import Sidebar from "./page-componentss/sidebar/sidebar.js";

class Session extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: "closed",
      JSONnotes: [],
      trashArr: [],
      pushed: "",
      deketed: "",
      darkMode: "off",
      email: "",
      reminders: [],
    };

    this.UNSAFE_componentWillMount = () => {
      axios.defaults.headers.post["Content-Type"] = "application/json";
      var data_to_send = {
        username: this.props.username,
        key: `${this.props.underwear}`,
      };
      axios
        .post("http://0.0.0.0:5000/get", JSON.stringify(data_to_send))
        .then((response) => {
          var JSONnotes = response.data.notes;
          this.setState({
            JSONnotes: JSONnotes,
            email: response.data.email,
            reminders: response.data.reminders,
          });
        });
    };

    this.pushTrash = (item) => {
      this.state.trashArr.push(item);
      this.setState({
        pushed: "Ok",
      });
    };
    this.state.JSONnotes.sort();

    this.clearTrash = () => {
      var length = this.state.trashArr.length;
      this.state.trashArr.splice(0, length);
      this.setState({
        deleted: length,
      });
    };

    this.sidebarUpdate = (value) => {
      this.setState({
        sidebar: value,
      });
    };
    this.deleteOneTrash = (index) => {
      this.state.trashArr.splice(index, 1);
      this.setState({
        deleted: index,
      });
    };
  }
  updateNotes = () => {
    axios.defaults.headers.post["Content-Type"] = "application/json";
    var data_to_send = {
      username: this.props.username,
      key: `${this.props.underwear}`,
      notes: this.state.JSONnotes,
      reminders: this.state.reminders,
    };
    axios
      .post("http://0.0.0.0:5000/update", JSON.stringify(data_to_send))
      .then((response) => {
        console.log(response.data.status);
      });
    this.UNSAFE_componentWillMount();
  };

  render() {
    return (
      <BrowserRouter>
        <Header
          sidebar={this.state.sidebar}
          sidebarUpdate={this.sidebarUpdate}
        />
        <Sidebar
          sidebar={this.state.sidebar}
          sidebarUpdate={this.sidebarUpdate}
        />
        <Route
          path="/home"
          component={() => (
            <Home
              darkMode={this.state.darkMode}
              pushTrash={this.pushTrash}
              JSONnotes={this.state.JSONnotes}
              updateNotes={this.updateNotes}
              {...this.props}
            />
          )}
        />

        <Route
          path="/reminders"
          component={() => (
            <Reminders
              reminders={this.state.reminders}
              updateNotes={this.updateNotes}
            />
          )}
        />
        <Route
          path="/bin"
          component={() => (
            <TrashBin
              clearTrash={this.clearTrash}
              deleteOneTrash={this.deleteOneTrash}
              trashArr={this.state.trashArr}
              JSONnotes={this.state.JSONnotes}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default Session;
