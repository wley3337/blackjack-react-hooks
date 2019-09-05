import { CurrentUser, SET_CURRENT_USER, CurrentUserActionTypes } from './CurrentUser.types'

const initialState: CurrentUser={
    firstName: "",
    lastName: "",
    bank: 0,
    username: ""
}

export const currentUser = (state=initialState, action: CurrentUserActionTypes): CurrentUser =>{
    switch(action.type){
        case SET_CURRENT_USER:
            return action.payload
        default:
            return state
    }
}