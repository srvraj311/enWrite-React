import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TrashBin from "./trashBin/trashbin.js";
import axios from "axios";
import URL from "./config.js";

import Home from "./home/home.js";
import Reminders from "./reminders/reminders.js";
import Header from "./page-componentss/header/header.js";
import Sidebar from "./page-componentss/sidebar/sidebar.js";
import User from "./user/user.js";
import About from "./about/about.js";

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
        .post(`${URL.URL}/get`, JSON.stringify(data_to_send))
        .then((response) => {
          this.setState({
            JSONnotes: response.data.notes,
            email: response.data.email,
            reminders: response.data.reminders,
            trashArr: response.data.bin,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    };

    this.pushTrash = (item) => {
      this.state.trashArr.push(item);
      this.updateNotes();
      this.setState({
        pushed: "Ok",
      });
    };
    this.state.JSONnotes.sort();

    this.clearTrash = () => {
      var length = this.state.trashArr.length;
      this.state.trashArr.splice(0, length);
      this.updateNotes();
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
      this.updateNotes();
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
      bin: this.state.trashArr,
    };
    axios
      .post(`${URL.URL}/update`, JSON.stringify(data_to_send))
      .then((response) => {});
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
        <Route
          path="/user"
          component={() => <User email={this.state.email} {...this.props} />}
        />
        <Route path="/about" component={() => <About />} />
      </BrowserRouter>
    );
  }
}

export default Session;
