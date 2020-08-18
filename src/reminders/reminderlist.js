import React from 'react'

const ReminderList = (props) => {

   var value = props.ReminderJSON.map((item , index ) => {
   var id = item.id
   var time = item.time
   var instance = item.instance
   var date = item.date
   var message = item.message.slice(0,20) + '..'
   var colour = item.colour
   var alarm = item.alarm


   var alarmOn = 'grey'
   if (alarm === 'yes'){alarmOn = '#404040'}
   return (
      <div key = {id} style = {{backgroundColor:`${colour}`}} className = "reminder">
                <div className = "reminder-info">
                   <p className = "time"> {time} <span>{instance}</span></p> 
                  <p className = "date">{date}</p>
                  <p className = "message">{message}</p>
                </div>
                <div className = "reminder-tools">
                   <div>
                        <i  onClick = {(event) => {props.deleteMe(id , time)}}className="fas fa-trash"></i>
                        <i style = {{color:`${alarmOn}`}} className="fas fa-bell"></i>
                   </div>
                        <div className = 'colour-changer'></div>
                
                </div>     
             </div>

   ) // End of return
}); //End of Map
   return value
}

export default ReminderList

