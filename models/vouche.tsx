export interface Tvouche {
    _id?: string,
    code: string,
    status: string,
    amount: number,
    createdAt: string,
    percent: number
    time:number | string
}
export interface userErr {
    error: "string"
}