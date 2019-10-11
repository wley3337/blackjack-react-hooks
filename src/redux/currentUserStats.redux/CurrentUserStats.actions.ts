import { CurrentUserStats, CurrentUserStatsActionTypes, SET_CURRENT_USER_STATS } from "./CurrentUserStats.types";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../reducer";
import { AnyAction } from "redux";
import { BASE_URL } from "../actions";

export const setCurrentUserStats = (currentUserStats: CurrentUserStats): CurrentUserStatsActionTypes =>{
    return { type: SET_CURRENT_USER_STATS, payload: currentUserStats }
}

export const getCurrentUserStats = ():ThunkAction<Promise<void>, AppState, null, AnyAction> => async (dispatch) => {
    const token = localStorage.getItem('token')
    console.log('token:', token)
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    }
    try{
        const res = await fetch(BASE_URL + '/user_hands', options)
        const resObj = await res.json()
    
        if(resObj.success){
            dispatch( setCurrentUserStats(resObj.user_stats) )
        }
    }
    catch(err){
        console.error("User Stats: ", err)
    }
}