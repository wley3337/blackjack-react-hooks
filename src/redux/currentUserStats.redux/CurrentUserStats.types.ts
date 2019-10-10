export const SET_CURRENT_USER_STATS: string ="SET_CURRENT_USER_STATS"

export interface CurrentUserStats{
    wins: number 
    losses: number 
    bets: Array<number>
}

export interface SetCurrentUserStats{
    type: typeof SET_CURRENT_USER_STATS,
    payload: CurrentUserStats
}

export type CurrentUserStatsActionTypes = SetCurrentUserStats