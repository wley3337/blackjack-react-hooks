export const LOGIN_USER:string = "LOGIN_USER"


export interface userLoginFormType{
    username: string,
    password: string
}


export interface loginUser{
    type: typeof LOGIN_USER,
    payload: userLoginFormType
}
