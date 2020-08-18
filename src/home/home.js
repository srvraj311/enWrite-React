import React, { Component } from 'react';
import '../css/style.css'
//import JSON from './notes.json'

import NewNote from './newnote'


class Home extends Component{


   render(){
      return (   
         <div>
            <NewNote {...this.props} JSONnotes={this.props.JSONnotes}/>        
        </div> 
      )
 }
}

export default Home;

