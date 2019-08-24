import React, { useState } from 'react'
import { UserLoginTypes } from '../interfaces/UserLoginTypes.interface'

const FETCH_URL: string = "http://localhost:3000"
const blankUser = {
    firstName: "", 
    lastName: "",
    username: "",
    password: ""
}

const  handleSubmit = async (user: UserLoginTypes) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json"
        },
        body: JSON.stringify({user: user})
    }
    try{
        const r = await fetch(FETCH_URL + '/users', options)
        const userObj = await r.json()
        console.log(userObj)
    }
    catch(err) {
        console.error("User Creation: ", err ); 
    }
}
  
export const LogIn = () => {

    const[user, setUser] = useState < UserLoginTypes > (blankUser)
 
    return (
        <form className="login-form" onSubmit={(e) =>{
            e.preventDefault()
            handleSubmit(user)
        } }>
            <label>
                First Name:
                <input 
                    aria-label={"First Name"}
                    aria-required="true"
                    type='text' 
                    value={user.firstName} 
                    onChange={ e=> setUser( {...user, firstName: e.target.value} ) } 
                    placeholder="First Name"
                />
            </label>
            <label>
                Last Name: 
                <input
                    aria-label={"Last Name"}
                    aria-required="true"
                    type='text' 
                    value={user.lastName} 
                    onChange={ e => setUser( {...user, lastName: e.target.value} ) } 
                    placeholder="Last Name"
                /> 
            </label>
            <label>
                Username:
                <input 
                    aria-label={"Username"}
                    aria-required="true"
                    type='text' 
                    value={user.username} 
                    onChange={ e => setUser( {...user, username: e.target.value} ) } 
                    placeholder="Username"
                />
            </label>
            <label>
                Password:
                <input 
                    aria-label={"Password"}
                    aria-required="true"
                    type='text' 
                    value={user.password} 
                    onChange={ e => setUser( {...user, password: e.target.value} ) } 
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
