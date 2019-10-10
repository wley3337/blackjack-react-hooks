import { ErrorMessages, ErrorMessageActionTypes, ADD_ERROR_MESSAGES, CLEAR_ERROR_MESSAGES } from './ErrorMessages.types'

const initialState: ErrorMessages ={
    messages: []
}

export const errorMessages = (state=initialState, action: ErrorMessageActionTypes): ErrorMessages =>{
    switch(action.type){
        case ADD_ERROR_MESSAGES:
            return action.payload
        case CLEAR_ERROR_MESSAGES:
            return action.payload
        default: 
            return state 
    }
}