import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'


import LandingPage from '../components/LandingPage';
import { AppState } from '../redux/reducer'
import { CurrentUser } from '../redux/currentUser.redux/CurrentUser.types';

interface blackJackProps{
    currentUser: CurrentUser
}

{/* the logic here should be onComponent did mount check for a token, if token get user if no token login */}
const BlackJack: React.FC<blackJackProps> = ({currentUser}) =>{
    console.log("User Name", currentUser)
    return (
        <div>
          { (localStorage.token && currentUser.username) ? <p>Logged in</p> : <Route path ="/" component={LandingPage}/> }
    
        </div>
    )
}
const mSTP = (state: AppState) =>({
    currentUser: state.currentUser
})
export default connect(mSTP)(BlackJack)