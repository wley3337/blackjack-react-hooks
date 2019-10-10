import { ErrorMessages, ErrorMessageActionTypes, ADD_ERROR_MESSAGES, CLEAR_ERROR_MESSAGES } from "./ErrorMessages.types";


export const addErrorMessages = (errorMessages: ErrorMessages): ErrorMessageActionTypes =>{
    return {type: ADD_ERROR_MESSAGES, payload: errorMessages}
}

export const clearErrorMessages = (): ErrorMessageActionTypes => {
    return { type: CLEAR_ERROR_MESSAGES, payload: {messages: []}}
}