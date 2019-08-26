export const FIRST_TYPE: string = "FIRST TYPE"


interface FirstAction {
  type: typeof FIRST_TYPE
}


export type FirstTypes = FirstAction

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