import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Link } from 'react-router-dom'

interface userLoginForm{
    username: string,
    password: string
}


interface loginUserProps{
    userLogin: (user: userLoginForm) => void
}

export const LoginUser: React.FC<loginUserProps> = ({userLogin}) =>{

    const initialState:userLoginForm = {username: "", password: ""}
    const [userLoginForm, setUserLoginForm] = useState(initialState)
        
    return(
        <div className="login-wrapper">
            <form 
                className="login-form-wrapper"
                onSubmit={(e)=>{
                    e.preventDefault()
                    userLogin(userLoginForm)
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

export default connect(null, actions)(LoginUser)