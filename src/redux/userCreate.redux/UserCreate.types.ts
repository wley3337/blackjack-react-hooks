export const CREATE_USER:string = 'CREATE_USER'

export interface CreateUserForm{
    firstName: string, 
    lastName: string,
    username: string,
    password: string
}

export interface CreateUser{
    type: typeof CREATE_USER,
    payload: CreateUserForm
}