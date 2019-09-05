// Example from react docs on typescript: https://redux.js.org/recipes/usage-with-typescript
// src/store/chat/types.ts

export const SET_CURRENT_USER: string = "SET_CURRENT_USER"
export const LOGOUT: string = "LOGOUT"

export interface CurrentUser{
    firstName: string,
    lastName: string,
    bank: number,
    username: string
}

export interface SetUser{
    type: typeof SET_CURRENT_USER,
    payload: CurrentUser
}

export type CurrentUserActionTypes = SetUser

// Example from react docs on typescript: https://redux.js.org/recipes/usage-with-typescript
// src/store/chat/types.ts

// export interface Message {
//     user: string
//     message: string
//     timestamp: number
//   }
  
//   export interface ChatState {
//     messages: Message[]
//   }

//   // src/store/chat/types.ts
// export const SEND_MESSAGE = 'SEND_MESSAGE'
// export const DELETE_MESSAGE = 'DELETE_MESSAGE'

// interface SendMessageAction {
//   type: typeof SEND_MESSAGE
//   payload: Message
// }

// interface DeleteMessageAction {
//   type: typeof DELETE_MESSAGE
//   meta: {
//     timestamp: number
//   }
// }

// export type ChatActionTypes = SendMessageAction | DeleteMessageAction