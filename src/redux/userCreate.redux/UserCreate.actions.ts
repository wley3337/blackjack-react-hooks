import { BASE_URL, addErrorMessages } from "../actions";
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../reducer'
import { AnyAction } from 'redux'
import { CreateUserForm } from "./UserCreate.types";
import { setUser } from '../currentUser.redux/CurrentUser.actions'
import { History } from 'history';

export const userCreate = (createUserData: CreateUserForm, history: History ): ThunkAction <Promise<void>, AppState, null, AnyAction> => async (dispatch) => {
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
        const resObj = await res.json()
        if(resObj.success){
            localStorage.setItem('token', resObj.token)
            dispatch( setUser( resObj.user ) )
            history.push('/my-games')
        }
        if(!resObj.success){
            dispatch( addErrorMessages( resObj.errors ) )
        }
    }
    catch(err){
        console.error("User Creation: ", err);
    }
}