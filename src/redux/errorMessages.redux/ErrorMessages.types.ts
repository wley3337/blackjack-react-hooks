export const ADD_ERROR_MESSAGES: string = "ADD_ERROR_MESSAGES"
export const CLEAR_ERROR_MESSAGES: string = "CLEAR_ERROR_MESSAGES"

export interface ErrorMessages{
    messages: Array<string>
}

export interface AddErrorMessage{
    type: typeof ADD_ERROR_MESSAGES,
    payload: ErrorMessages
};

export interface ClearErrorMessages{
    type: typeof CLEAR_ERROR_MESSAGES,
    payload: ErrorMessages
};

export type ErrorMessageActionTypes = AddErrorMessage | ClearErrorMessages