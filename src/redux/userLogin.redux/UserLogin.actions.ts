import { BASE_URL } from "../actions";
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../reducer'
import { AnyAction } from 'redux'

import { userLoginFormType } from './UserLogin.types'
import { setUser } from '../currentUser.redux/CurrentUser.actions'



export const userLogin = (userLoginForm: userLoginFormType): ThunkAction<Promise<void>, AppState, null, AnyAction> => async (dispatch) =>{
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json"
        },  
        body: JSON.stringify({ user: userLoginForm })
    }
    try{
        const res = await fetch(BASE_URL + '/login', options)
        const resObj = await res.json()
        if(resObj.success){
            localStorage.setItem('token', resObj.token)
          
            dispatch( setUser( resObj.user ) )
        }
    }
    catch(err){
        console.error("User Login: ", err)
    }

}