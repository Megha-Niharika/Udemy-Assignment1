import React from 'react';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App=() =>
 {
  return (
    
      <div>

        <UserInput/>
        <UserOutput UserName= "megha"/>
         <UserOutput UserName= "megha"/>
          <UserOutput UserName= "megha"/>
        </div>
  );
}

export default App;
