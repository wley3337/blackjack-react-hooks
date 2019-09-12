import React from 'react'
import { Route } from 'react-router-dom'
import CreateUser from '../components/CreateUser';
import LoginUser from '../components/LoginUser';

const LandingPage = () =>{
    return (
        <div>
            <Route exact path="/" component={LoginUser}/>
            <Route exact path="/create-user" component={CreateUser}/>
        </div>
    )
}

export default LandingPage
