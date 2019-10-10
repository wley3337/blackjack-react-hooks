export const ADD_ERROR_MESSAGE: string = "ADD_ERROR_MESSAGE"

export interface ErrorMessages{
    messages: Array<string>
}

export interface AddErrorMessage{
    type: typeof ADD_ERROR_MESSAGE,
    payload: ErrorMessages
}

export type ErrorMessageActionTypes = AddErrorMessage