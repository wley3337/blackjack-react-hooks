import React,  { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { CurrentUser } from '../redux/currentUser.redux/CurrentUser.types'
import { AppState } from '../redux/reducer'
import { CurrentUserStats } from '../redux/currentUserStats.redux/CurrentUserStats.types'

interface UserShowProps{
    //from state
    currentUser: CurrentUser
    currentUserStats: CurrentUserStats
    //actions 
    getCurrentUserStats: () => void
}

export const UserShow: React.FC<UserShowProps> = ({ currentUser, getCurrentUserStats, currentUserStats }) =>{
    
    useEffect(() => { getCurrentUserStats(); return undefined }, [currentUser])
  
    return( 
        <div>
            <h1>Welcome {currentUser.firstName}!</h1>
            <div>
                <p>Your stats are: </p>
                <p>Wins: {currentUserStats.wins}</p>
                <p>Losses: {currentUserStats.losses}</p>

            </div>

        </div>
    )
}

const mSTP = ( state: AppState ) => ({
    currentUser: state.currentUser,
    currentUserStats: state.currentUserStats
})

export default connect(mSTP, actions)(UserShow)
