import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import store from '../redux/store'
import {Provider} from 'react-redux'
import './App.css';


import LogIn from '../components/LogIn';

const App = () =>  {

  return (
   <Provider store={store}>
      <Router>
        <div className="App">
          <LogIn />
        </div>
      </Router>
   </Provider>
  );
}

export default App;
