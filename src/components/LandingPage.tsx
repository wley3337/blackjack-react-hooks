import React from 'react'
import { Route } from 'react-router-dom'
import CreateUser from '../components/CreateUser';
import LoginUser from '../components/LoginUser';

const LandingPage = () =>{
    return (
        <div>
            <Route exact path="/" render={(props:any)=><LoginUser {...props} />}/>
            <Route exact path="/create-user" component={CreateUser}/>
        </div>
    )
}

export default LandingPage
