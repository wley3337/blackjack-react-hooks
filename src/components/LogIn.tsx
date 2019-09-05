import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/index'
import { AppState } from '../redux/reducer'
import { Action } from 'redux'
import { CreateUserForm } from '../redux/userCreate.redux/UserCreate.types'
import { ThunkAction } from 'redux-thunk';

const blankUser: CreateUserForm = {
    firstName: "", 
    lastName: "",
    username: "",
    password: ""
}
interface loginProps{
    //action from connect
    userCreate: (userFrom: CreateUserForm) => void
}

  
export const LogIn: React.FC<loginProps> = ({userCreate}) => {

    const[userForm, setUserForm] = useState < CreateUserForm> (blankUser)
 
    return (
        
            <form className="login-form" onSubmit={(e) =>{
                e.preventDefault()
                userCreate(userForm)
            } }>
                <label>
                    First Name:
                    <input 
                        aria-label={"First Name"}
                        aria-required="true"
                        type='text' 
                        value={userForm.firstName} 
                        onChange={ e=> setUserForm( {...userForm, firstName: e.target.value} ) } 
                        placeholder="First Name"
                    />
                </label>
                <label>
                    Last Name: 
                    <input
                        aria-label={"Last Name"}
                        aria-required="true"
                        type='text' 
                        value={userForm.lastName} 
                        onChange={ e => setUserForm( {...userForm, lastName: e.target.value} ) } 
                        placeholder="Last Name"
                    /> 
                </label>
                <label>
                    Username:
                    <input 
                        aria-label={"Username"}
                        aria-required="true"
                        type='text' 
                        value={userForm.username} 
                        onChange={ e => setUserForm( {...userForm, username: e.target.value} ) } 
                        placeholder="Username"
                    />
                </label>
                <label>
                    Password:
                    <input 
                        aria-label={"Password"}
                        aria-required="true"
                        type='text' 
                        value={userForm.password} 
                        onChange={ e => setUserForm( {...userForm, password: e.target.value} ) } 
                        placeholder="Password"
                    /> 
                </label>
                <label>
                    Submit: 
                    <button>Submit</button>
                </label>
            </form>
            
    )
}

export default connect(null, actions)(LogIn)
// const  handleSubmit = async ( user: CreateUserForm ) => {
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json; charset=utf-8",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({user: user})
//     }
//     try{
//         const r = await fetch(FETCH_URL + '/users', options)
//         const userObj = await r.json()
//         console.log(userObj)
        
//     }
//     catch(err) {
//         console.error("User Creation: ", err ); 
//     }
// }


// const FETCH_URL: string = "http://localhost:3000"