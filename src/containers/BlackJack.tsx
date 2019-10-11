import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import LandingPage from '../components/LandingPage';
import { AppState } from '../redux/reducer'
import { CurrentUser } from '../redux/currentUser.redux/CurrentUser.types';
import UserShow from './UserShow';

interface BlackJackProps{
    currentUser: CurrentUser
}

//the logic here should be onComponent did mount check for a token, if token get user if no token login 
const BlackJack: React.FC<BlackJackProps> = ({currentUser}) =>{
    return (
        <div>
          { (localStorage.token && currentUser.username) ? <Route path="/my-games" component={UserShow}/> : <Route path ="/" component={LandingPage}/> }
        </div>
    )
}
const mSTP = (state: AppState) =>({
    currentUser: state.currentUser
})
export default withRouter(connect(mSTP)(BlackJack))