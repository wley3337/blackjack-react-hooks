import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Link, RouteComponentProps } from 'react-router-dom'
import { AppState } from '../redux/reducer'
import { ErrorMessages, ErrorMessageActionTypes } from '../redux/errorMessages.redux/ErrorMessages.types'
import ErrorMessagesDisplay from './ErrorMessagesDisplay'

interface userLoginForm{
    username: string,
    password: string
}


interface loginUserProps extends RouteComponentProps{
    //actions
    userLogin: (user: userLoginForm, history:any) => void
    clearErrorMessages: ()=> ErrorMessageActionTypes
    //state 
    errorMessages: ErrorMessages,
}

export const LoginUser: React.FC<loginUserProps> = ({userLogin, errorMessages, clearErrorMessages, history}) =>{
    const initialState:userLoginForm = {username: "", password: ""}
    const [userLoginForm, setUserLoginForm] = useState(initialState)
        
    return(
        <div className="login-wrapper">
            {!(errorMessages.messages.length > 0)? null : <ErrorMessagesDisplay messages={errorMessages.messages}/> }
            <form 
                className="login-form-wrapper"
                onSubmit={(e)=>{
                    e.preventDefault()
                    clearErrorMessages()
                    userLogin(userLoginForm, history)
                }}
            >
                <label>
                    Username:
                    <input
                        value={userLoginForm.username}
                        onChange={(e)=> setUserLoginForm({...userLoginForm, username: e.target.value})}
                        aria-label={"First Name"}
                        aria-required="true"
                        placeholder="username"
                    />
                </label>
                <label>
                    Password:
                    <input
                        aria-label={"First Name"}
                        aria-required="true"
                        value={userLoginForm.password}
                        onChange={(e)=>setUserLoginForm({...userLoginForm, password: e.target.value})}
                        placeholder="password"
                    />
                </label>
                <label>
                    Submit: 
                    <button>Submit</button>
                </label>
            </form>
            <Link to="/create-user">Create an account</Link>
        </div>
    )
}
const mSTP = ( state: AppState ) =>({ errorMessages: state.errorMessages })
export default connect(mSTP, actions)(LoginUser)