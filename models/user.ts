export interface Tuser {
    _id?: string,
    password: string,
    email: string
    phone?: string
    name?: string
    role?: any
    avatar?: string
}
export interface userErr {
    error: "string"
}