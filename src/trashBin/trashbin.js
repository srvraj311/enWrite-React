import React, { Component } from 'react';
import './trashbin.css'


class TrashBin extends Component {

   constructor(props){
      super(props)

     this.BinList = this.props.trashArr.map((item , index) => {
         return (
            <div key = {item.id}className = 'cardSmall'>
            <div className = 'noteName'>
                  <i onClick = {(event) => {this.restoreItem(index)}}className = "fas fa-redo"></i>
                  {item.title}
            </div>
         <div className = 'savedNotes'>{item.note}</div>
             
            </div>
         )
     })

      this.restoreItem = (index) => {
         var length = this.props.JSONnotes.length - 1
         var item =  this.props.JSONnotes[length]
         var i = this.props.trashArr[index]
         item = Number(item.id) + 1
         item = item.toString()
         i.id = item
         this.props.JSONnotes.push(i)
         this.props.deleteOneTrash(index)
        
      }
   }


   render(){
      
      return(
      <div className = 'holder'> 
      <div className = 'circle'> 
      <div onClick = {(event)=>{this.props.clearTrash()}} className = "circle-add"><i className = "fas fa-times" ></i></div>
            
            </div>
            <div className = 'container'>
               {this.BinList}
            </div>
      </div>
      )
   }
}



export default TrashBin