export interface Tblog {
    _id?: any
    title?: string,
    slug?: string,
    thumbnail?: string,
    desc?: string,
    content: string,
    categoryId?: {
        name: string
    },
}
export interface userErr {
    error: "string"
}