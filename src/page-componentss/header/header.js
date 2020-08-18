import React, { Component } from 'react'
import './header.css'


class Header extends Component{

   openSidebar = () => {
      if (this.props.sidebar === 'closed') {
         return  this.props.sidebarUpdate('opened')
      }
   
        else if (this.props.sidebar === 'opened'){
         return this.props.sidebarUpdate('closed')
     }
}

constructor(){
   super()
   this.noSearch = () => { if (window.location.pathname === '/'){
   return(
      <div className="navbar">
    
      <i className="fas fa-bars" onClick ={ this.openSidebar}></i>
       <h1 className="main-title" >enwrite</h1>

     <ul>
         <li><i onClick = {(event) => {document.getElementById('searchBox').focus()}}className="fas fa-search"></i></li>
         <li><i className="fas fa-user"></i></li>
    </ul>

</div>
   )} else{
      return (<div className="navbar">
    
      <i className="fas fa-bars" onClick ={ this.openSidebar}></i>
       <h1 className="main-title" >enwrite</h1>

     <ul>
         
         <li><i className="fas fa-user"></i></li>
    </ul>

</div>)
   }
   }
}

   render(){
      return(
         <div>
                  {this.noSearch()}
         </div>
  
      )
   }
}


export default Header;



