import { CreateUserForm } from "./UserCreate.types";
import { BASE_URL } from "../actions";
import { setUser } from '../currentUser.redux/CurrentUser.actions'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../reducer'
import { AnyAction } from 'redux'

export const userCreate = (createUserData: CreateUserForm ): ThunkAction <Promise<void>, AppState, null, AnyAction> => async (dispatch) => {
    const options ={
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json"
        },  
        body: JSON.stringify({user: createUserData})
    }

    try{
        const res = await fetch(BASE_URL + `/users`, options)
        const userObj = await res.json()
        console.log("User Obj: ", userObj)
        localStorage.setItem('token', userObj.token)
        dispatch(setUser(userObj.user))
    }
    catch(err){
        console.error("User Creation: ", err);
    }
}