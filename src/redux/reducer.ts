import { combineReducers } from 'redux';
import { currentUser } from './currentUser.redux/CurrentUser.reducers'


//curious if I'd want to put the reducer in the type file and then import them all into here. It would make the files more modular and have them  each in a folder with the type file, action file and reducer file perhaps nameReducer, nameActions, nameTypes?
 const reducers = combineReducers({
    currentUser
})

export default reducers;

export type AppState = ReturnType<typeof reducers>;