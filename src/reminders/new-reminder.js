import React, { Component } from "react";
import { year, month, date, hour, minute, instance } from "./config";
import Timeselector from "./timeselctor";
import ReminderList from "./reminderlist";

class NewReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        "#999999",
        "#E4BEA8",
        "#FAE07A",
        "#EEA2AD",
        "#CCFFCC",
        "#B266B2",
      ],
      hour: `${hour}`,
      minute: `${minute}`,
      instance: `${instance}`,
      date: `${date}`,
      month: `${month}`,
      year: `${year}`,
      alarm: "no",
      color: "#FFFFFF",
      message: "",
      status: "0",
    };

    // To Generate A random color in The 'Add New Note" section of the app

    this.randomColor = this.state.colors.map((color, index) => {
      return (
        <div
          onClick={(event) => {
            this.changeColor(color);
          }}
          key={index}
          style={{ backgroundColor: `${color}` }}
          className="colorCircle"
        ></div>
      );
    });

    // Increasing or Decreasing values of the time selector in the Selector

    this.increaseHour = () => {
      var hourArr = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
      ];
      if (this.state.hour === "23" || this.state.hour === undefined) {
        this.setState({
          hour: "00",
        });
      } else {
        var newHour = hourArr.indexOf(this.state.hour) + 1;
        this.setState({
          hour: hourArr[newHour],
        });
      }

      // this.setState({
      //    hour:
      // })
    };

    this.decreaseHour = () => {
      var hourArr = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
      ];
      if (this.state.hour === "00" || this.state.hour === undefined) {
        this.setState({
          hour: "23",
        });
      } else {
        var newHour = hourArr.indexOf(this.state.hour) - 1;
        this.setState({
          hour: hourArr[newHour],
        });
      }
    };

    this.increaseMinute = () => {
      var minuteArr = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
      ];
      if (this.state.minute === "59" || this.state.minute === undefined) {
        this.setState({
          minute: "00",
        });
      } else {
        var newMinute = minuteArr.indexOf(this.state.minute) + 1;
        this.setState({
          minute: minuteArr[newMinute],
        });
      }
    };

    this.decreaseMinute = () => {
      var minuteArr = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
      ];
      if (this.state.minute === "00" || this.state.minute === undefined) {
        this.setState({
          minute: "59",
        });
      } else {
        var newMinute = minuteArr.indexOf(this.state.minute) - 1;
        this.setState({
          minute: minuteArr[newMinute],
        });
      }
    };

    this.toggleInstancee = () => {
      if (this.state.instance === "am") {
        this.setState({
          instance: "pm",
        });
      } else if (this.state.instance === "pm") {
        this.setState({
          instance: "am",
        });
      }
    };

    this.increaseDate = () => {
      var dateArr = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ];

      if (this.state.month === "February") {
        dateArr.splice(28, 4);
      }
      if (
        this.state.month === "April" ||
        this.state.month === "June" ||
        this.state.month === "September" ||
        this.state.month === "November"
      ) {
        dateArr.splice(30, 1);
      }

      if (this.state.date === "31") {
        this.setState({
          date: "01",
        });
      } else {
        var newdate = dateArr.indexOf(this.state.date) + 1;

        this.setState({
          date: dateArr[newdate],
        });
      }
    };

    this.decreaseDate = () => {
      var dateArr = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ];

      if (this.state.month === "February") {
        dateArr.splice(28, 4);
      }
      if (
        this.state.month === "April" ||
        this.state.month === "June" ||
        this.state.month === "September" ||
        this.state.month === "November"
      ) {
        dateArr.splice(30, 1);
      }

      if (this.state.date === "01") {
        this.setState({
          date: dateArr[dateArr.length - 1],
        });
      } else {
        var newdate = dateArr.indexOf(this.state.date) - 1;

        this.setState({
          date: dateArr[newdate],
        });
      }
    };

    this.increaseMonth = () => {
      var monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      if (this.state.month === "December") {
        this.setState({
          month: "January",
        });
      } else {
        var newMonth = monthName.indexOf(this.state.month) + 1;
        this.setState({
          month: monthName[newMonth],
        });
      }
    };

    this.decreaseMonth = () => {
      var monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      if (this.state.month === "January") {
        this.setState({
          month: "December",
        });
      } else {
        var newMonth = monthName.indexOf(this.state.month) - 1;
        this.setState({
          month: monthName[newMonth],
        });
      }
    };

    this.increaseYear = () => {
      var yearArr = [];
      for (var i = 1970; i <= 2050; i++) {
        i = i.toString();
        yearArr.push(i);
      }
      yearArr.map((item, i) => {
        if (item === this.state.year) {
          i = i + 1;
          return this.setState({
            year: yearArr[i],
          });
        }
      });
    };

    this.decreaseYear = () => {
      var yearArr = [];
      for (var i = 1970; i <= 2050; i++) {
        i = i.toString();
        yearArr.push(i);
      }
      yearArr.map((item, i) => {
        if (item === this.state.year) {
          i = i - 1;
          this.setState({
            year: yearArr[i],
          });
        }
      });
    };

    // Turn on or Off the alarm
    this.toggleAlarm = () => {
      if (this.state.alarm === "no") {
        this.setState({
          alarm: "yes",
        });
      } else if (this.state.alarm === "yes") {
        this.setState({
          alarm: "no",
        });
      }
    };

    // Change color value in the state to save it to JSON
    this.changeColor = (value) => {
      this.setState({
        color: value,
      });
    };

    // Input handler for the message box in the "new Notes Section"
    this.messageInput = (event) => {
      this.setState({
        message: event.target.value,
      });
    };

    // Function to save the new Reminder
    this.saveReminder = () => {
      var length = this.props.ReminderJSON.length;
      this.props.ReminderJSON.push({
        id: `${length + 1}`,
        time: `${this.state.hour}:${this.state.minute}`,
        instance: `${this.state.instance}`,
        date: `${this.state.date} ${this.state.month}`,
        message: `${this.state.message}`,
        colour: `${this.state.color}`,
        alarm: `${this.state.alarm}`,
      });
      length = this.props.ReminderJSON.length + 1;
      for (var j = 0; j <= length; j++) {
        this.setState({
          status: j,
        });
      }
      this.props.showInput();
      this.setState({
        color: "#FFFFFF",
      });
      this.props.updateNotes();
    };

    // Function to delete One reminder by delete Button

    this.deleteMe = (id, time) => {
      this.props.ReminderJSON.map((item, i) => {
        if (item.id === id && item.time === time) {
          this.props.ReminderJSON.splice(i, 1);
        }
      });
      var length = this.props.ReminderJSON.length + 1;
      for (var j = 0; j <= length; j++) {
        this.setState({
          status: j,
        });
      }
      this.props.updateNotes();
    };
  } // End of constructor

  render() {
    return (
      <div>
        <div
          style={{ maxHeight: `${this.props.inputBox}` }}
          className="new-reminder"
        >
          <Timeselector
            colors={this.state.colors}
            hour={this.state.hour}
            minute={this.state.minute}
            instance={this.state.instance}
            date={this.state.date}
            month={this.state.month}
            year={this.state.year}
            increaseHour={this.increaseHour}
            decreaseHour={this.decreaseHour}
            increaseMinute={this.increaseMinute}
            decreaseMinute={this.decreaseMinute}
            toggleInstancee={this.toggleInstancee}
            increaseDate={this.increaseDate}
            decreaseDate={this.decreaseDate}
            increaseMonth={this.increaseMonth}
            decreaseMonth={this.decreaseMonth}
            decreaseYear={this.decreaseYear}
            increaseYear={this.increaseYear}
          />
          <div className="alarmBox">
            <p className="switchText">Ding Dong ?</p>
            <input
              onClick={(event) => this.toggleAlarm()}
              id="switchcheckbox"
              type="checkbox"
              className="hidden"
            />

            <label htmlFor="switchcheckbox" id="switch"></label>
          </div>

          <div className="colorBox">{this.randomColor}</div>

          <input
            className="messageBox"
            type="text"
            placeholder="Message"
            onChange={(event) => {
              this.messageInput(event);
            }}
          ></input>

          <div onClick={this.saveReminder} className="saveButton">
            SAVE
          </div>
        </div>
        <div className="reminder-holder">
          <ReminderList deleteMe={this.deleteMe} {...this.props} />
        </div>
      </div>
    );
  }
}

export default NewReminder;
