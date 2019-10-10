import { CurrentUserStats, CurrentUserStatsActionTypes, SET_CURRENT_USER_STATS } from "./CurrentUserStats.types";

const initialState: CurrentUserStats={
    wins: 0,
    losses: 0,
    bets: []
}

export const currentUserStats = (state= initialState, action: CurrentUserStatsActionTypes) =>{
    switch(action.type){
        case SET_CURRENT_USER_STATS:
            return action.payload
        default:
            return state
    }
}