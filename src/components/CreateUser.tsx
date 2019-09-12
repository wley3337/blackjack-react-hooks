import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/index'
import { CreateUserForm } from '../redux/userCreate.redux/UserCreate.types'

const blankUser: CreateUserForm = {
    firstName: "", 
    lastName: "",
    username: "",
    password: ""
}

interface createUserProps{
    //action from connect
    userCreate: (userFrom: CreateUserForm) => void
}

export const CreateUser: React.FC<createUserProps> = ({userCreate}) => {

    const[userForm, setUserForm] = useState < CreateUserForm> (blankUser)
 
    return (
       <div className="create-user-wrapper"> 
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
        </div>
    )
}

export default connect(null, actions)(CreateUser)