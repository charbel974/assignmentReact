import React, { Component, useState } from 'react';
import './App.css';
import UserInput from './userInput/userInput';
import UserOutput from './userOutput/userOutput';

const App = () => {

  const [user, setUser]=useState ('superchar')

  const usernameChangeHandler = (event) => {
   setUser(event.target.value)
  }
  

    return (
      <div>
       <h1>Hello </h1>
<input type="text"/>
        <UserInput
       changed={usernameChangeHandler}
       currentName={user}/>
       <UserOutput userName={user}/>
       <UserOutput userName={user} />
       <UserOutput userName="charbel"/>
       
       

      </div>
    );
  }


export default App;
