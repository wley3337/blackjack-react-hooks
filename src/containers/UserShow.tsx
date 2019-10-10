import React from 'react'
import { connect } from 'react-redux'
import { CurrentUser } from '../redux/currentUser.redux/CurrentUser.types'
import { AppState } from '../redux/reducer'

interface UserShowProps{
    //from state
    currentUser: CurrentUser
    //actions 
}

const userShow: React.FC<UserShowProps> = ({ currentUser }) =>{
    return(
        <div>UserShowPage</div>
    )
}

const mSTP = ( state: AppState ) => ({
    currentUser: state.currentUser
})

export default connect(mSTP)(userShow)
