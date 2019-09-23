import React from 'react';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import "./UserOutput/Output.css"

class App extends React.Component{
 
   
   state = {
     username:"megha"
   }

   usernameHandler = (event) =>
   {
        this.setState({username:event.target.value})
   }

   render()
   {

   

  return (
    
      <div>
       
        <UserInput  changed ={this.usernameHandler} currentName={this.state.username}/>
        <UserOutput UserName= {this.state.username} />
         <UserOutput UserName= {this.state.username}/>
          <UserOutput UserName= "abhay"/>
        </div>
  );
}
}
export default App;
