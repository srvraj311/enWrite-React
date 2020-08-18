import React, { Component } from 'react';


class Timeselector extends Component {


   render(){

      return(
         <div className = "timeHolder"  >
               <div className='timeSelector'>
                      <div className="hourSelector">
                         <i className="fas fa-angle-up" onClick = {(event) => {this.props.increaseHour()}}></i>
                         <div className="timeBox"><p>{this.props.hour}</p></div>
                         <i className="fas fa-angle-down" onClick = {(event) => {this.props.decreaseHour()}}></i>
                      </div>
                      <div className="hourSelector">
                         <i className="fas fa-angle-up" onClick = {(event) => {this.props.increaseMinute()}}></i>
                         <div className="timeBox"><p>{this.props.minute}</p></div>
                         <i className="fas fa-angle-down" onClick = {(event) => {this.props.decreaseMinute()}}></i>
                      </div>
                      <div className="hourSelector">
                         <i className="fas fa-angle-up" onClick = {(event) => {this.props.toggleInstancee()}}></i>
                         <div className="timeBox"><p>{this.props.instance}</p></div>
                         <i className="fas fa-angle-down" onClick = {(event) => {this.props.toggleInstancee()}}></i>
                         </div>
          </div>
          <div className = 'dateSelector'>
          <div className="hourSelector">
             <i className="fas fa-angle-up" onClick = {(event) => {this.props.increaseDate()}}></i>
            <div className="timeBox"><p>{this.props.date}</p></div>
             <i className="fas fa-angle-down" onClick = {(event) => {this.props.decreaseDate()}}></i>
          </div>
          <div className="hourSelector">
             <i className="fas fa-angle-up" onClick = {(event) => {this.props.increaseMonth()}}></i>
             <div className="monthBox"><p>{this.props.month}</p></div>
             <i className="fas fa-angle-down" onClick = {(event) => {this.props.decreaseMonth()}}></i>
          </div>
          <div className="hourSelector">
             <i className="fas fa-angle-up" onClick = {(event) => {this.props.increaseYear()}} ></i>
             <div className="yearBox"><p>{this.props.year}</p></div>
             <i className="fas fa-angle-down" onClick = {(event) => {this.props.decreaseYear()}}></i>
          </div>
</div>
         </div>
         
      )
   }
}


export default Timeselector;