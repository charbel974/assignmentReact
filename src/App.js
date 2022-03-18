import React, { Component } from 'react';
import './App.css';
import userInput from './userInput/userInput';
import userOutput from './userOutput/userOutput';

class App extends Component {

  state = {
    username: 'superchar'
  }

  usernameChangeHandler = (event) => {
   this.setState({
    username: event.target.value
   })
  }
  

  render() {
    return (
      <div>

      <userInput 
      changed={this.usernameChangeHandler}
      currentName={this.state.username}/>
      <userOutput userName={this.state.username}/>
      <userOutput userName={this.state.username} />
      <userOutput userName="charbel"/>

      </div>
    );
  }
}

export default App;
