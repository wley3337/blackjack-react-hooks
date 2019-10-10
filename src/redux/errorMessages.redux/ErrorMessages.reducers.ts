import { ErrorMessages, ErrorMessageActionTypes, ADD_ERROR_MESSAGE } from './ErrorMessages.types'

const initialState: ErrorMessages ={
    messages: []
}

export const errorMessages = (state=initialState, action: ErrorMessageActionTypes): ErrorMessages =>{
    switch(action.type){
        case ADD_ERROR_MESSAGE:
            return action.payload
        default: 
            return state 
    }
}