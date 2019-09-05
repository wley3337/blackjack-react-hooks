import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import store from '../redux/store'
import {Provider} from 'react-redux'
import './App.css';


import CreateUser from '../components/CreateUser';
import LoginUser from '../components/LoginUser';

const App = () =>  {

  return (
   <Provider store={store}>
      <Router>
        <div className="App">
          <CreateUser />
          <LoginUser />
        </div>
      </Router>
   </Provider>
  );
}

export default App;
