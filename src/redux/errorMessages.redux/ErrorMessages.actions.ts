import { ErrorMessages, ErrorMessageActionTypes, ADD_ERROR_MESSAGE } from "./ErrorMessages.types";


export const addErrorMessages = (errorMessages: ErrorMessages): ErrorMessageActionTypes =>{
    return {type: ADD_ERROR_MESSAGE, payload: errorMessages}
}