import{ CurrentUser, CurrentUserActionTypes, SET_CURRENT_USER } from './CurrentUser.types'


export const setUser = (user: CurrentUser): CurrentUserActionTypes =>{
    return { type: SET_CURRENT_USER, payload: user}
}