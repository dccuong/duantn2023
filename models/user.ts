export interface Tuser {
    _id?: string,
    password: string,
    email: string
    phone?: string
    name?: string
    role?: string
    avatar?: string
}
export interface userErr {
    error: "string"
}