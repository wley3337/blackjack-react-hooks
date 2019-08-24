import React from 'react';
import './App.css';
import TryOut   from '../components/TryOut'
import { LogIn } from '../components/LogIn';

const App = () =>  {
  
  return (
    <div className="App">
      <TryOut  name="Me" num={42}/>
      <LogIn />
    </div>
  );
}

export default App;
